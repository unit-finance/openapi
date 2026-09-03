require 'helpers/api'
require 'helpers/fixtures'
require 'helpers/shared_account'

RSpec.describe 'create_batch_releases', :sandbox do
  it 'creates batch releases when a batch account is configured' do
    ctx = Helpers::SharedAccount.get_or_create
    api = Helpers::Api.build_payments_api
    data, status_code, = api.create_batch_releases_with_http_info(
      {
        'data' => [
          {
            'type' => 'batchRelease',
            'attributes' => {
              'amount' => 100,
              'description' => 'SDK batch release',
              'senderName' => 'SDK Sender',
              'senderAccountNumber' => '1234567890',
              'senderAddress' => Helpers::Fixtures::US_ADDRESS
            },
            'relationships' => {
              'receiver' => {
                'data' => { 'type' => 'depositAccount', 'id' => ctx[:account_id] }
              }
            }
          }
        ]
      }
    )

    expect(status_code).to eq(201)
    expect(data.data).to be_an(Array)
  end
end
