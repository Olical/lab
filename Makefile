.PHONY: all bootstrap serve

all: bootstrap serve

bootstrap:
	bundle install --path vendor/bundle

serve:
	bundle exec jekyll serve
