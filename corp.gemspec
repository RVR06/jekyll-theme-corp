# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-corp"
  spec.version       = "0.1.0"
  spec.authors       = ["RVR06", "GitHub, Inc."]
  spec.email         = [""]

  spec.summary       = "Corporate theme."
  spec.homepage      = "https://github.com/RVR06/corp"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.9"

  spec.add_development_dependency "bundler", ">= 2.2.33"
  spec.add_development_dependency "rake", "~> 12.0"
end
