require 'helpers/api'
require 'helpers/fixtures'

RSpec.describe 'cancel_application', :sandbox do
  it 'cancels an awaiting-documents individual application' do
    api = Helpers::Api.build_api

    # Cancel is only valid for applications in `PendingReview` or
    # `AwaitingDocuments`. Business applications auto-approve in the sandbox
    # (even with a magic officer SSN), so this spec creates an individual
    # applicant (SSN `000000003`) that lands in `AwaitingDocuments`.
    created, created_status, = api.create_application_with_http_info(
      Helpers::Fixtures.cancelable_individual_application_request
    )
    expect(created_status).to eq(201)
    app_id = Helpers::Api.unwrap(created.data).id

    data, status_code, = api.cancel_application_with_http_info(
      app_id,
      {
        'data' => {
          'type' => 'applicationCancel',
          'attributes' => { 'reason' => 'By user request via SDK integration test' }
        }
      }
    )

    expect(status_code).to eq(201)
    app = Helpers::Api.unwrap(data.data)
    expect(app.id).to eq(app_id)
    expect(app.attributes.status).to eq('Canceled')
  end
end
