require 'helpers/api'
require 'helpers/fixtures'

RSpec.describe 'create_application' do
  it 'creates a business application', :sandbox do
    api = Helpers::Api.build_api
    data, status_code, = api.create_application_with_http_info(
      Helpers::Fixtures.business_application_request
    )

    expect(status_code).to eq(201)
    app = Helpers::Api.unwrap(data.data)
    expect(app.type).to eq('businessApplication')
    expect(app.id).to be_a(String)
    expect(app.attributes).not_to be_nil
    expect(app.attributes.status).not_to be_nil
  end

  # The spec types the `POST /applications` 201 `data` as BusinessApplication,
  # and the generated client deserializes response bodies strictly, so only the
  # Business variant survives a typed round-trip. The Individual and
  # SoleProprietor variants are therefore validated as request-serialization
  # checks (mirroring the Java/Python suites) rather than live round-trips.
  it 'serializes an individual application request' do
    req = UnitFinanceSdk::CreateIndividualApplicationRequest.build_from_hash(
      Helpers::Fixtures.individual_application_request
    )
    expect(req.data.type).to eq('individualApplication')
    expect(req.data.attributes.ssn).not_to be_nil
  end

  it 'serializes a sole proprietor application request' do
    req = UnitFinanceSdk::CreateSoleProprietorApplicationRequest.build_from_hash(
      Helpers::Fixtures.sole_proprietor_application_request
    )
    expect(req.data.type).to eq('individualApplication')
    expect(req.data.attributes.sole_proprietorship).to be(true)
  end
end
