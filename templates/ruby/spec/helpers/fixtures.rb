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

require 'securerandom'
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

    def deposit_account_request_for_customer(customer_id)
      create_deposit_account_request(customer_id)
    end

    def create_deposit_account_request(customer_id)
      {
        'data' => {
          'type' => 'depositAccount',
          'attributes' => {
            'depositProduct' => 'checking',
            'tags' => base_tags
          },
          'relationships' => {
            'customer' => { 'data' => { 'type' => 'customer', 'id' => customer_id } }
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
          # `reason: Other` requires an accompanying `reasonText`.
          'attributes' => { 'reason' => 'Other', 'reasonText' => 'SDK integration test freeze' }
        }
      }
    end

    def create_fee_request(account_id)
      {
        'data' => {
          'type' => 'fee',
          'attributes' => {
            'amount' => 100,
            'description' => 'SDK integration test fee',
            'tags' => base_tags
          },
          'relationships' => {
            'account' => { 'data' => { 'type' => 'account', 'id' => account_id } }
          }
        }
      }
    end

    # The reversal is anchored to the fee's transaction (the fee id doubles as
    # the transaction id) and the account it posted to -- not to a `fee`
    # relationship, which the sandbox rejects as an unexpected field.
    def reverse_fee_request(account_id, transaction_id)
      {
        'data' => {
          'type' => 'feeReversal',
          'attributes' => {
            'description' => 'SDK integration test fee reversal',
            'tags' => base_tags
          },
          'relationships' => {
            'account' => { 'data' => { 'type' => 'account', 'id' => account_id } },
            'transaction' => { 'data' => { 'type' => 'transaction', 'id' => transaction_id } }
          }
        }
      }
    end

    # The spec marks `idempotencyKey` optional on both hold requests, but the
    # sandbox rejects them with a 400 unless it is present. Each call gets a
    # fresh key so that separately-built holds are never collapsed into one
    # another.
    def create_account_hold_request(account_id)
      {
        'data' => {
          'type' => 'accountHold',
          'attributes' => {
            'amount' => 500,
            'description' => 'SDK integration test hold',
            'idempotencyKey' => "#{Helpers::Api::TEST_RUN_ID}-hold-#{SecureRandom.hex(4)}"
          },
          'relationships' => {
            'account' => { 'data' => { 'type' => 'account', 'id' => account_id } }
          }
        }
      }
    end

    def release_account_hold_request(amount = 500)
      {
        'data' => {
          'type' => 'accountHold',
          'attributes' => { 'amount' => amount }
        }
      }
    end

    # A check deposit is created against an existing account; `amount` and
    # `description` are the only required attributes. The account relationship
    # uses the generic "account" resource type (matching the hold/fee fixtures).
    def create_check_deposit_request(account_id)
      {
        'data' => {
          'type' => 'checkDeposit',
          'attributes' => {
            'amount' => 20_000,
            'description' => 'SDK integration test check deposit',
            'tags' => base_tags
          },
          'relationships' => {
            'account' => { 'data' => { 'type' => 'account', 'id' => account_id } }
          }
        }
      }
    end

    # updateCheckDeposit only exposes `tags` (and the optional
    # clearingDaysOverride); `tags` is required on the update envelope.
    def update_check_deposit_request
      {
        'data' => {
          'type' => 'checkDeposit',
          'attributes' => { 'tags' => base_tags.merge('updated' => 'true') }
        }
      }
    end

    # The send-link component requires a white-label theme and an authorized
    # user alongside the account. Sandbox orgs without those resources reject
    # the call, so the suite treats a validation error as a feature-unavailable
    # skip.
    def create_check_deposit_send_link_request(account_id, white_label_theme_id, authorized_user_id)
      {
        'data' => {
          'type' => 'sendLinkForCheckDepositComponent',
          'attributes' => {
            'qrCode' => true,
            'idempotencyKey' => "#{Helpers::Api::TEST_RUN_ID}-send-link-#{SecureRandom.hex(4)}"
          },
          'relationships' => {
            'whiteLabelTheme' => { 'data' => { 'type' => 'whiteLabelTheme', 'id' => white_label_theme_id } },
            'account' => { 'data' => { 'type' => 'account', 'id' => account_id } },
            'authorizedUser' => { 'data' => { 'type' => 'authorizedUser', 'id' => authorized_user_id } }
          }
        }
      }
    end

    def create_book_payment_request(account_id, counterparty_account_id)
      {
        'data' => {
          'type' => 'bookPayment',
          'attributes' => {
            'amount' => 100,
            'description' => 'SDK integration test book payment',
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

    def create_bulk_payment_request(account_id, counterparty_account_id)
      {
        'data' => [
          {
            'type' => 'bookPayment',
            'attributes' => {
              'amount' => 100,
              'description' => 'SDK integration test book payment',
              'tags' => base_tags
            },
            'relationships' => {
              'account' => { 'data' => { 'type' => 'account', 'id' => account_id } },
              'counterpartyAccount' => {
                'data' => { 'type' => 'account', 'id' => counterparty_account_id }
              }
            }
          }
        ]
      }
    end

    def update_book_payment_request
      {
        'data' => {
          'type' => 'bookPayment',
          'attributes' => {
            'tags' => base_tags.merge('updated' => 'true')
          }
        }
      }
    end

    def get_expected_ach_completion_date_request(account_id)
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

    def create_recurring_book_payment_request(account_id, counterparty_account_id)
      start = Time.now.utc + (7 * 86_400)
      ending = start + (90 * 86_400)
      {
        'data' => {
          'type' => 'recurringCreditBookPayment',
          'attributes' => {
            'amount' => 100,
            'description' => 'SDK integration test recurring payment',
            'schedule' => {
              'startTime' => start.strftime('%Y-%m-%d'),
              'endTime' => ending.strftime('%Y-%m-%d'),
              'interval' => 'Monthly',
              'dayOfMonth' => 15
            },
            'tags' => base_tags,
            'idempotencyKey' => "#{Helpers::Api::TEST_RUN_ID}-recurring-#{SecureRandom.hex(4)}"
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

    def update_received_payment_request
      {
        'data' => {
          'type' => 'achReceivedPayment',
          'attributes' => {
            'tags' => base_tags.merge('updated' => 'true')
          }
        }
      }
    end

    # The cash-deposit-barcode request carries only a `storeId` (obtained from the
    # store-locations endpoints) plus customer and account relationships. The
    # sandbox rejects any extra attributes such as `amount`.
    def generate_cash_deposit_barcode_request(store_id, customer_id, account_id)
      {
        'data' => {
          'type' => 'cashDepositBarcode',
          'attributes' => { 'storeId' => store_id },
          'relationships' => {
            'customer' => { 'data' => { 'type' => 'customer', 'id' => customer_id } },
            'account' => { 'data' => { 'type' => 'depositAccount', 'id' => account_id } }
          }
        }
      }
    end

    def card_holder
      {
        'fullName' => FULL_NAME,
        'dateOfBirth' => '2001-08-15',
        'address' => US_ADDRESS,
        'phone' => US_PHONE,
        'email' => "peter+#{Helpers::Api::TEST_RUN_ID}@oscorp.com",
        'ssn' => DEFAULT_OFFICER_SSN,
        'tags' => base_tags
      }
    end

    # A business debit card is a physical card issued against a deposit account.
    def create_business_debit_card_request(account_id)
      {
        'data' => {
          'type' => 'businessDebitCard',
          'attributes' => card_holder,
          'relationships' => {
            'account' => { 'data' => { 'type' => 'account', 'id' => account_id } }
          }
        }
      }
    end

    # A business virtual debit card is issued Active immediately (physical cards
    # land in `Inactive` until activated). Operations that require an Active card
    # -- get_card_pin_status, report_card_lost, report_card_stolen -- run against
    # a virtual card. Virtual cards cannot be replaced (physical only).
    def create_business_virtual_debit_card_request(account_id)
      {
        'data' => {
          'type' => 'businessVirtualDebitCard',
          'attributes' => card_holder,
          'relationships' => {
            'account' => { 'data' => { 'type' => 'account', 'id' => account_id } }
          }
        }
      }
    end

    # UpdateCardDataAttributes only exposes card-holder contact fields (tags are
    # not updatable on a card), so the update touches the card holder's phone.
    def update_card_request
      {
        'data' => {
          'type' => 'businessDebitCard',
          'attributes' => { 'phone' => { 'countryCode' => '1', 'number' => '5555555556' } }
        }
      }
    end

    def freeze_card_request
      {
        'data' => {
          'type' => 'freezeCard',
          'attributes' => { 'reason' => 'SDK integration test freeze' }
        }
      }
    end

    def replace_card_request
      {
        'data' => {
          'type' => 'replaceCard',
          'attributes' => { 'shippingAddress' => US_ADDRESS }
        }
      }
    end

    # PATCH /accounts/{accountId}/transactions/{transactionId} accepts a generic
    # tags-update envelope (`type: transaction`) regardless of the underlying
    # transaction variant, so a single builder covers every transaction kind.
    def update_transaction_tags_request
      {
        'data' => {
          'type' => 'transaction',
          'attributes' => { 'tags' => base_tags.merge('updated' => 'true') }
        }
      }
    end

    # PATCH /transactions/{transactionId} is discriminated by `data.type`; the
    # bookTransaction variant requires the owning account relationship alongside
    # the updatable summary/tags attributes.
    def update_book_transaction_request(account_id)
      {
        'data' => {
          'type' => 'bookTransaction',
          'attributes' => {
            'summary' => 'SDK integration test book transaction update',
            'tags' => base_tags.merge('updated' => 'true')
          },
          'relationships' => {
            'account' => { 'data' => { 'type' => 'account', 'id' => account_id } }
          }
        }
      }
    end

    def add_account_owners_request(customer_ids)
      {
        'data' => customer_ids.map { |id| { 'type' => 'customer', 'id' => id } }
      }
    end

    def remove_account_owners_request(customer_ids)
      {
        'data' => customer_ids.map { |id| { 'type' => 'customer', 'id' => id } }
      }
    end

    def unique_phone_number
      "2#{(Time.now.to_f * 1000).to_i.to_s[-9..]}".slice(0, 10)
    end

    def authorized_user
      unique = Helpers::Api::TEST_RUN_ID.gsub(/[^a-zA-Z0-9]/, '')[-8..] || 'user'
      {
        'fullName' => { 'first' => 'Erlich', 'last' => "Backman#{unique}" },
        'email' => "erlich+#{Helpers::Api::TEST_RUN_ID}@piedpiper.com",
        'phone' => { 'countryCode' => '1', 'number' => unique_phone_number }
      }
    end

    def add_authorized_users_request(users = [authorized_user])
      {
        'data' => {
          'type' => 'addAuthorizedUsers',
          'attributes' => { 'authorizedUsers' => users }
        }
      }
    end

    def remove_authorized_users_request(emails)
      {
        'data' => {
          'type' => 'removeAuthorizedUsers',
          'attributes' => { 'authorizedUsersEmails' => emails }
        }
      }
    end

    # CreatePolicy requires email/message outreach settings and a white-label
    # theme that a plain sandbox org does not necessarily have. Tests pass
    # placeholder relationship ids and treat a 4xx/5xx as feature-unavailable.
    def create_policy_request(email_outreach_settings_id = '0', message_outreach_settings_id = '0', white_label_theme_id = '0')
      {
        'data' => {
          'type' => 'cardFraudOutreachPolicy',
          'attributes' => {
            'contactPhone' => US_PHONE,
            'contactUrl' => 'https://sdk-test.unit.co',
            'activitiesLookBackPeriodHours' => 72,
            'caseExpirationPeriodHours' => 72,
            'numberOfCardActivities' => 3,
            'idempotencyKey' => "#{Helpers::Api::TEST_RUN_ID}-fraud-policy-#{SecureRandom.hex(4)}"
          },
          'relationships' => {
            'emailOutreachSettings' => {
              'data' => { 'type' => 'emailOutreachSettings', 'id' => email_outreach_settings_id }
            },
            'messageOutreachSettings' => {
              'data' => { 'type' => 'messageOutreachSettings', 'id' => message_outreach_settings_id }
            },
            'whiteLabelTheme' => {
              'data' => { 'type' => 'whiteLabelTheme', 'id' => white_label_theme_id }
            }
          }
        }
      }
    end

    def update_policy_request
      {
        'data' => {
          'type' => 'cardFraudOutreachPolicy',
          'attributes' => { 'contactUrl' => 'https://sdk-test-updated.unit.co' }
        }
      }
    end

    def mark_card_fraud_case_as_fraud_request(fraudulent_activity_ids)
      {
        'data' => {
          'type' => 'markAsFraudRequest',
          'attributes' => { 'fraudulentActivityIds' => fraudulent_activity_ids }
        }
      }
    end

    def create_cardholder_token_verification_request
      {
        'data' => {
          'type' => 'cardholderTokenVerification',
          'attributes' => { 'channel' => 'sms' }
        }
      }
    end

    # The spec marks `verificationToken` / `verificationCode` required even for
    # the plain `cards` scope. The code is a 6-digit OTP delivered to the card
    # holder out of band, so the suite can only send a placeholder.
    def create_cardholder_token_request(verification_token, verification_code = '000000')
      {
        'data' => {
          'type' => 'cardholderToken',
          'attributes' => {
            'scope' => 'cards',
            'verificationToken' => verification_token,
            'verificationCode' => verification_code,
            'expiresIn' => 3600
          }
        }
      }
    end

    # `signedNonce` is issued by the Visa in-app SDK. The suite cannot mint one,
    # so tests send the spec example and treat a 4xx as unavailable.
    def get_mobile_wallet_payload_request(signed_nonce = 'eyJle...')
      {
        'data' => {
          'attributes' => { 'signedNonce' => signed_nonce }
        }
      }
    end

    def create_batch_releases_request
      {
        'data' => {
          'type' => 'batchRelease',
          'attributes' => {
            'amount' => 100,
            'description' => 'SDK integration test batch release',
            'senderName' => 'Peter Parker',
            'senderAddress' => US_ADDRESS,
            'senderAccountNumber' => '12345678901234567',
            'tags' => base_tags
          }
        }
      }
    end

    def send_drawdown_payment_request
      {
        'data' => {
          'type' => 'sendWireDrawdown',
          'attributes' => {
            'idempotencyKey' => SecureRandom.uuid,
            'tags' => base_tags
          }
        }
      }
    end

    # A business wallet customer is created directly (no application flow). The
    # sandbox requires the full attribute set from the spec: bank partner name,
    # business name, address, EIN, vertical and employee-count bucket.
    def create_business_wallet_customer_request
      {
        'data' => {
          'type' => 'businessWalletCustomer',
          'attributes' => {
            # bankName must be one of the sandbox's partner-bank names
            # (Piermont, Blue Ridge, Pacific West, MVB, Choice Financial Group,
            # Thread, Lincoln Savings, Emprise, TransPecos, Vantage).
            'bankName' => 'Thread',
            'businessName' => "Pied Piper Wallet #{Helpers::Api::TEST_RUN_ID}",
            'address' => US_ADDRESS,
            'ein' => '123456789',
            'businessVertical' => 'TechnologyMediaOrTelecom',
            'numberOfEmployees' => 'Between50And100',
            'tags' => base_tags
          }
        }
      }
    end

    # updateCustomer is discriminated by `data.type`; the businessCustomer
    # variant only touches tags here so the shared business customer is left
    # otherwise intact for downstream suites.
    def update_business_customer_request
      {
        'data' => {
          'type' => 'businessCustomer',
          'attributes' => { 'tags' => base_tags.merge('updated' => 'true') }
        }
      }
    end

    def archive_customer_request
      {
        'data' => {
          'type' => 'customerArchive',
          'attributes' => { 'reason' => 'Inactive' }
        }
      }
    end

    def update_business_customer_officer_request
      {
        'data' => {
          'type' => 'officer',
          'attributes' => { 'occupation' => 'ArchitectOrEngineer' }
        }
      }
    end

    # An ACH counterparty is an external bank account owned by one of our
    # customers. The routing/account number pair has to resolve to a real bank,
    # so the suite points the counterparty at one of the shared customer's own
    # Unit deposit accounts (see `helpers/counterparties.rb`) rather than
    # inventing an ABA number the sandbox would reject.
    def create_counterparty_request(customer_id, routing_number, account_number)
      {
        'data' => {
          'type' => 'achCounterparty',
          'attributes' => {
            'name' => "Peter Parker #{Helpers::Api::TEST_RUN_ID}",
            'routingNumber' => routing_number,
            'accountNumber' => account_number,
            'accountType' => 'Checking',
            'type' => 'Business',
            'tags' => base_tags,
            'idempotencyKey' => "#{Helpers::Api::TEST_RUN_ID}-counterparty-#{SecureRandom.hex(4)}"
          },
          'relationships' => {
            'customer' => { 'data' => { 'type' => 'customer', 'id' => customer_id } }
          }
        }
      }
    end

    # UpdateCounterpartyDataAttributes exposes plaidProcessorToken, verifyName,
    # permissions and tags. Only `tags` is safe for a non-Plaid counterparty: a
    # relink needs a Plaid token we don't have, and permissions beyond the
    # default CreditOnly depend on the counterparty's bank.
    def update_counterparty_request
      {
        'data' => {
          'type' => 'counterparty',
          'attributes' => { 'tags' => base_tags.merge('updated' => 'true') }
        }
      }
    end
  end
end
