# frozen_string_literal: true

require_relative 'lib/core/accounting/version'

Gem::Specification.new do |spec|
  spec.name = 'core-accounting'
  spec.version = Core::Accounting::VERSION
  spec.authors = ['Max Schridde']
  spec.email = ['maxjschridde@gmail.com']

  spec.summary = 'CORE extension for accounting backend'
  spec.description = 'CORE::Accounting is a double entry accounting extension for the CORE Platform.'
  spec.post_install_message = 'CORE::Accounting installed'

  spec.homepage = 'https://moonlight-labs.com/core/'
  spec.required_ruby_version = '>= 3.1.0'

  spec.metadata['allowed_push_host'] = "TODO: Set to 'http://mygemserver.com'"

  spec.metadata['homepage_uri'] = spec.homepage
  spec.metadata['source_code_uri'] = 'https://moonlight-labs.com/core/'
  spec.metadata['changelog_uri'] = 'https://moonlight-labs.com/core/core-accounting#changelog'

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.bindir        = 'exe'
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ['lib']

  # spec.add_dependency 'activerecord', '~> 6.0'
  spec.add_dependency 'double_entry', '~> 2.0.0.beta5'

  spec.add_development_dependency 'graphql'
  spec.add_development_dependency 'pg'

  spec.add_development_dependency 'combustion', '~> 1.3' # for smaller test app
  spec.add_development_dependency 'racksh'
  spec.add_development_dependency 'sinatra-activerecord'

  spec.add_development_dependency 'activerecord'
  spec.add_development_dependency 'minitest', '~> 5.0'
  spec.add_development_dependency 'rake', '~> 12.0'

  spec.metadata['rubygems_mfa_required'] = 'true'
end
