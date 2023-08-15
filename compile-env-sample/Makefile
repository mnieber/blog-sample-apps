ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

compile-env:
	cd ${ROOT_DIR}/env/dev && compile-env env-spec.yaml
	echo
	echo "Postgres env variables"
	cat ${ROOT_DIR}/postgres/.env/dev.injected.env
	echo
	echo "Backend env variables"
	cat ${ROOT_DIR}/backend/.env/dev.injected.env
	echo
	echo "Frontend env variables"
	cat ${ROOT_DIR}/frontend/.env/dev.injected.env

