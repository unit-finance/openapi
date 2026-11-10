# -*- encoding: utf-8 -*-

# Curated gemspec for the Unit Ruby SDK. Swapped in over the
# openapi-generator-emitted gemspec by `prepare-ruby-sdk.ts` so the gem ships
# stable, branded metadata and deps (rather than the generator's
# OpenAPI-Generator/Unlicense defaults). The Ruby analogue of the curated
# `templates/python/pyproject.toml`.
#
# The `typhoeus` runtime dependency is preserved (the SDK's HTTP layer); the
# `rspec` development dependency is what the placed integration suite runs on.

$:.push File.expand_path("../lib", __FILE__)
require "unit_openapi_ruby_sdk/version"

Gem::Specification.new do |s|
  s.name        = "unit_openapi_ruby_sdk"
  s.version     = UnitFinanceSdk::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Unit"]
  s.homepage    = "https://www.unit.co"
  s.summary     = "Ruby SDK for the Unit banking API."
  s.description = "Ruby SDK for the Unit banking API. Auto-generated from the Unit OpenAPI spec."
  s.license     = "MPL-2.0"
  s.required_ruby_version = ">= 2.7"
  s.metadata    = {
    "homepage_uri"          => "https://www.unit.co",
    "documentation_uri"     => "https://docs.unit.co",
    "rubygems_mfa_required" => "true"
  }

  s.add_runtime_dependency 'typhoeus', '~> 1.0', '>= 1.0.1'

  s.add_development_dependency 'rspec', '~> 3.6', '>= 3.6.0'

  # Ship only the runtime library plus packaging metadata. The integration
  # suite (spec/), the generated docs/, and dev config are intentionally
  # excluded from the published gem. Enumerated explicitly (no shelling out to
  # `find`) so packaging is portable and never sweeps in stray files such as a
  # local .env.
  s.files         = Dir["lib/**/*.rb"] + %w[README.md unit_openapi_ruby_sdk.gemspec]
  s.executables   = []
  s.require_paths = ["lib"]
end
