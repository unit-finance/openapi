# RSpec bootstrap for the Unit Ruby SDK integration suite.
#
# Two responsibilities, run before any spec is loaded (the SDK root's `.rspec`
# carries `--require spec_helper`, so this file is always loaded first):
#
#   1. Load the nearest `.env` by walking up from this file's directory (the
#      SDK root's `.env` sits one level up at `sdks/ruby/.env`). Real
#      environment variables always win -- Dotenv.load does not override
#      already-set vars.
#   2. Register a `:sandbox` skip gate: when `UNIT_SANDBOX_TOKEN` is unset every
#      example tagged `:sandbox` is skipped and the run still exits 0, mirroring
#      the Node `describe.skip`, Java `assumeToken`, and Python `requires_token`
#      gates.
#
# RSpec adds `spec/` to the load path, so specs `require 'helpers/api'` etc.

require 'unit_openapi_ruby_sdk'

# Namespaced so the bootstrap doesn't define a method on the global `Object`.
module SandboxEnv
  module_function

  def load_nearest
    require 'dotenv'
    dir = File.expand_path(__dir__)
    loop do
      candidate = File.join(dir, '.env')
      return Dotenv.load(candidate) if File.file?(candidate)

      parent = File.dirname(dir)
      break if parent == dir

      dir = parent
    end
  rescue LoadError
    # dotenv is optional; real environment variables still work.
  end
end

SandboxEnv.load_nearest

RSpec.configure do |config|
  config.expect_with(:rspec) { |expectations| expectations.syntax = :expect }

  token = ENV['UNIT_SANDBOX_TOKEN']
  token_present = !token.nil? && !token.empty?

  config.before(:each, :sandbox) do
    unless token_present
      skip 'UNIT_SANDBOX_TOKEN is unset; set it in .env or the shell to run sandbox tests.'
    end
  end
end
