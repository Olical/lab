.PHONY: all bootstrap serve

all: bootstrap serve

bootstrap:
	bundle install

serve:
	bundle exec jekyll serve
