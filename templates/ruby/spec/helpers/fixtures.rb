# Request-body fixtures, the Ruby analogue of Node's `helpers/fixtures.ts` and
# Python's `helpers/fixtures.py`.
#
# Every body is a plain Hash with camelCase wire keys. The generated client's
# `object_to_http_body` JSON-encodes whatever it is handed (a Hash responds to
# `to_hash`, returning itself), and `client_side_validation` only checks for
# nil -- so a raw Hash serializes with its `data` envelope intact for both the
# concrete-model endpoints (cancel, check-registered-agent-address,
# update-beneficial-owner) and the `oneOf` union endpoints (create, update).
# This sidesteps the union-wrapping the Python suite needs, where a raw dict
# coerces to an empty union.

require 'date'

require_relative 'api'

module Helpers
  module Fixtures
    US_ADDRESS = {
      'street' => '20 Ingram St',
      'city' => 'Forest Hills',
      'state' => 'NY',
      'postalCode' => '11375',
      'country' => 'US'
    }.freeze

    US_PHONE = { 'countryCode' => '1', 'number' => '5555555555' }.freeze

    FULL_NAME = { 'first' => 'Peter', 'last' => 'Parker' }.freeze

    # Sandbox SSN that lands the officer in the default (auto-approve) path.
    DEFAULT_OFFICER_SSN = '721074426'.freeze

    module_function

    def base_tags
      { 'testRun' => Helpers::Api::TEST_RUN_ID }
    end

    def business_contact
      {
        'fullName' => FULL_NAME,
        'email' => "peter+#{Helpers::Api::TEST_RUN_ID}@oscorp.com",
        'phone' => US_PHONE
      }
    end

    def officer(ssn: DEFAULT_OFFICER_SSN)
      {
        'fullName' => FULL_NAME,
        'dateOfBirth' => '2001-08-15',
        'title' => 'CEO',
        'ssn' => ssn,
        'email' => "peter+#{Helpers::Api::TEST_RUN_ID}@oscorp.com",
        'phone' => US_PHONE,
        'address' => US_ADDRESS
      }
    end

    def beneficial_owners
      [
        {
          'fullName' => { 'first' => 'Mary Jane', 'last' => 'Watson' },
          'dateOfBirth' => '2001-08-15',
          'ssn' => '574567625',
          'email' => "mj+#{Helpers::Api::TEST_RUN_ID}@oscorp.com",
          'phone' => US_PHONE,
          'address' => US_ADDRESS,
          'percentage' => 60
        }
      ]
    end

    def business_application_request(officer_ssn: DEFAULT_OFFICER_SSN)
      {
        'data' => {
          'type' => 'businessApplication',
          'attributes' => {
            'name' => "Pied Piper #{Helpers::Api::TEST_RUN_ID}",
            'address' => US_ADDRESS,
            'phone' => US_PHONE,
            'stateOfIncorporation' => 'DE',
            'ein' => '123456789',
            'entityType' => 'Corporation',
            'yearOfIncorporation' => '2020',
            'countriesOfOperation' => ['US'],
            'businessVertical' => 'TechnologyMediaOrTelecom',
            'website' => 'https://www.piedpiper.com',
            'contact' => business_contact,
            'officer' => officer(ssn: officer_ssn),
            'beneficialOwners' => beneficial_owners,
            'annualRevenue' => 'Between500kAnd1m',
            'numberOfEmployees' => 'Between50And100',
            'cashFlow' => 'Predictable',
            'tags' => base_tags
          }
        }
      }
    end

    def individual_application_request
      {
        'data' => {
          'type' => 'individualApplication',
          'attributes' => {
            # Either `ssn` or `passport` is required, never both.
            'ssn' => '721074426',
            'fullName' => FULL_NAME,
            'dateOfBirth' => '2001-08-15',
            'address' => US_ADDRESS,
            'phone' => US_PHONE,
            'email' => "peter+#{Helpers::Api::TEST_RUN_ID}@oscorp.com",
            'occupation' => 'ArchitectOrEngineer',
            'annualIncome' => 'Between50kAnd100k',
            'sourceOfIncome' => 'EmploymentOrPayrollIncome',
            'tags' => base_tags
          }
        }
      }
    end

    # Individual application the sandbox lands in `AwaitingDocuments` (applicant
    # SSN `000000003`), a non-terminal state that can be canceled. Business
    # applications auto-approve in the sandbox even with a magic officer SSN, so
    # the cancel flow exercises an individual applicant instead. See
    # https://docs.unit.co/api/applications/simulations#simulate-application-statuses
    def cancelable_individual_application_request
      req = individual_application_request
      req['data']['attributes']['ssn'] = '000000003'
      req
    end

    # Sole proprietor uses the `individualApplication` discriminator value but a
    # distinct attribute set (`soleProprietorship: true` plus business-style
    # fields), and the SoleProprietor* revenue/employee buckets.
    def sole_proprietor_application_request
      {
        'data' => {
          'type' => 'individualApplication',
          'attributes' => {
            'ssn' => '721074426',
            'fullName' => FULL_NAME,
            'dateOfBirth' => '2001-08-15',
            'address' => US_ADDRESS,
            'phone' => US_PHONE,
            'email' => "peter+#{Helpers::Api::TEST_RUN_ID}@oscorp.com",
            'soleProprietorship' => true,
            'ein' => '123456789',
            'dba' => "Pied Piper SP #{Helpers::Api::TEST_RUN_ID}",
            'businessVertical' => 'TechnologyMediaOrTelecom',
            'annualRevenue' => 'Between100kAnd200k',
            'numberOfEmployees' => 'Between2And5',
            'website' => 'https://www.piedpiper.com',
            'tags' => base_tags
          }
        }
      }
    end

    def update_business_application_request
      {
        'data' => {
          'type' => 'businessApplication',
          'attributes' => { 'tags' => base_tags.merge('updated' => 'true') }
        }
      }
    end

    def update_business_beneficial_owner_request(application_id)
      {
        'data' => {
          'type' => 'beneficialOwner',
          'attributes' => { 'occupation' => 'ArchitectOrEngineer' },
          'relationships' => {
            'application' => {
              'data' => { 'type' => 'businessApplication', 'id' => application_id }
            }
          }
        }
      }
    end

    def check_registered_agent_address_request
      {
        'data' => {
          'type' => 'checkRegisteredAgentAddress',
          'attributes' => { 'address' => US_ADDRESS }
        }
      }
    end

    # --- Accounts / Fees / Payments fixtures ---

    def create_deposit_account_request(customer_id)
      {
        'data' => {
          'type' => 'depositAccount',
          'attributes' => {
            'depositProduct' => 'checking',
            'tags' => base_tags
          },
          'relationships' => {
            'customer' => {
              'data' => { 'type' => 'customer', 'id' => customer_id }
            }
          }
        }
      }
    end

    def update_deposit_account_request
      {
        'data' => {
          'type' => 'depositAccount',
          'attributes' => {
            'tags' => base_tags.merge('updated' => 'true')
          }
        }
      }
    end

    def close_deposit_account_request
      {
        'data' => {
          'type' => 'depositAccountClose',
          'attributes' => { 'reason' => 'ByCustomer' }
        }
      }
    end

    def freeze_deposit_account_request
      {
        'data' => {
          'type' => 'accountFreeze',
          'attributes' => {
            'reason' => 'Other',
            'reasonText' => 'SDK integration test freeze'
          }
        }
      }
    end

    def add_account_owners_request(customer_id)
      {
        'data' => [{ 'type' => 'customer', 'id' => customer_id }]
      }
    end

    def create_account_hold_request(account_id)
      {
        'data' => {
          'type' => 'accountHold',
          'attributes' => {
            'amount' => 100,
            'description' => 'SDK integration test hold'
          },
          'relationships' => {
            'account' => { 'data' => { 'type' => 'account', 'id' => account_id } }
          }
        }
      }
    end

    def create_fee_request(account_id)
      {
        'data' => {
          'type' => 'fee',
          'attributes' => {
            'amount' => 50,
            'description' => 'SDK integration test fee',
            'tags' => base_tags
          },
          'relationships' => {
            'account' => { 'data' => { 'type' => 'account', 'id' => account_id } }
          }
        }
      }
    end

    def reverse_fee_request(account_id, transaction_id)
      {
        'data' => {
          'type' => 'feeReversal',
          'attributes' => { 'description' => 'SDK integration test fee reversal' },
          'relationships' => {
            'account' => { 'data' => { 'type' => 'account', 'id' => account_id } },
            'transaction' => { 'data' => { 'type' => 'transaction', 'id' => transaction_id } }
          }
        }
      }
    end

    def release_account_hold_request(amount = 100)
      {
        'data' => {
          'type' => 'accountHold',
          'attributes' => { 'amount' => amount }
        }
      }
    end

    def sandbox_counterparty
      {
        'routingNumber' => '812345678',
        'accountNumber' => '1000000001',
        'accountType' => 'Checking',
        'name' => 'SDK Test Counterparty'
      }
    end

    def ach_credit_payment_request(account_id)
      {
        'data' => {
          'type' => 'achPayment',
          'attributes' => {
            'amount' => 10_000,
            'direction' => 'Credit',
            'description' => 'SDK test funding',
            'counterparty' => sandbox_counterparty,
            'tags' => base_tags
          },
          'relationships' => {
            'account' => { 'data' => { 'type' => 'depositAccount', 'id' => account_id } }
          }
        }
      }
    end

    def ach_debit_payment_request(account_id)
      {
        'data' => {
          'type' => 'achPayment',
          'attributes' => {
            'amount' => 100,
            'direction' => 'Debit',
            'description' => 'SDK test debit',
            'counterparty' => sandbox_counterparty,
            'tags' => base_tags
          },
          'relationships' => {
            'account' => { 'data' => { 'type' => 'depositAccount', 'id' => account_id } }
          }
        }
      }
    end

    def book_payment_request(account_id, counterparty_account_id)
      {
        'data' => {
          'type' => 'bookPayment',
          'attributes' => {
            'amount' => 100,
            'description' => 'SDK book payment',
            'tags' => base_tags
          },
          'relationships' => {
            'account' => { 'data' => { 'type' => 'account', 'id' => account_id } },
            'counterpartyAccount' => {
              'data' => { 'type' => 'account', 'id' => counterparty_account_id }
            }
          }
        }
      }
    end

    def update_book_payment_request
      {
        'data' => {
          'type' => 'bookPayment',
          'attributes' => { 'tags' => base_tags.merge('updated' => 'true') }
        }
      }
    end

    def bulk_payment_request(account_id, counterparty_account_id)
      {
        'data' => [
          book_payment_request(account_id, counterparty_account_id)['data']
        ]
      }
    end

    def expected_ach_completion_date_request(account_id)
      {
        'data' => {
          'type' => 'achExpectedCompletionDate',
          'attributes' => {
            'direction' => 'Credit',
            'amount' => 1000
          },
          'relationships' => {
            'account' => { 'data' => { 'type' => 'account', 'id' => account_id } }
          }
        }
      }
    end

    def update_received_payment_request
      {
        'data' => {
          'type' => 'achReceivedPayment',
          'attributes' => { 'tags' => base_tags.merge('updated' => 'true') }
        }
      }
    end

    def recurring_book_payment_request(account_id, counterparty_account_id)
      start = Date.today >> 1
      finish = start >> 2
      {
        'data' => {
          'type' => 'recurringCreditBookPayment',
          'attributes' => {
            'amount' => 100,
            'description' => 'SDK recurring book',
            'schedule' => {
              'interval' => 'Monthly',
              'dayOfMonth' => 15,
              'startTime' => start.iso8601,
              'endTime' => finish.iso8601
            },
            'tags' => base_tags
          },
          'relationships' => {
            'account' => { 'data' => { 'type' => 'account', 'id' => account_id } },
            'counterpartyAccount' => {
              'data' => { 'type' => 'account', 'id' => counterparty_account_id }
            }
          }
        }
      }
    end

    def cash_deposit_barcode_request(customer_id, account_id, store_id)
      {
        'data' => {
          'type' => 'cashDepositBarcode',
          'attributes' => { 'storeId' => store_id },
          'relationships' => {
            'customer' => { 'data' => { 'type' => 'customer', 'id' => customer_id } },
            'account' => { 'data' => { 'type' => 'account', 'id' => account_id } }
          }
        }
      }
    end
  end
end
