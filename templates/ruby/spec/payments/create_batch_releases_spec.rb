require 'helpers/api'
require 'helpers/fixtures'

RSpec.describe 'create_batch_releases', :sandbox do
  # Batch releases require org-level batch-account configuration (a batch account
  # plus receiver-account mapping) that the sandbox org does not provide, and the
  # endpoint expects an array of release objects at `/data`. Mirror the Node
  # suite, which skips this operation rather than failing.
  it 'creates a batch release' do
    skip 'batch releases require org-level batch account configuration'
  end
end
