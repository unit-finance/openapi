# Shared cards, the Ruby analogue of Node's `sharedCard.ts`.
#
# Lazily provisions one Active virtual card that read-only Cards suites reuse,
# plus factories for dedicated physical/virtual cards used by mutating suites.

require_relative 'api'
require_relative 'fixtures'
require_relative 'shared_account'

module Helpers
  module SharedCard
    @cached = nil

    module_function

    def create_card(virtual)
      shared = Helpers::SharedAccount.get_or_create
      api = Helpers::Api.build_cards_api
      request =
        if virtual
          Helpers::Fixtures.create_business_virtual_debit_card_request(shared[:account_id])
        else
          Helpers::Fixtures.create_business_debit_card_request(shared[:account_id])
        end
      data, status_code, = api.create_card_with_http_info(request)
      raise "Failed to create card: expected status 201, got #{status_code}." unless status_code == 201

      card = Helpers::Api.unwrap(data.data)
      { card_id: card.id, type: card.type }
    end

    # Returns a cached Active virtual card for read-only Cards suites. Virtual
    # cards are Active on creation, which get_card_pin_status requires.
    def get_or_create
      @cached ||= create_card(true)
    end

    # Creates an isolated physical debit card for state-mutating suites.
    def create_dedicated_card
      create_card(false)
    end

    # Creates an isolated Active virtual card (report-lost/report-stolen).
    def create_dedicated_virtual_card
      create_card(true)
    end
  end
end
