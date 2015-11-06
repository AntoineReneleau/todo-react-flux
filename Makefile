# ================================================================================
# PROJECT VARS - YOU CAN UPDATE
# ================================================================================
step=---------------------------------------------
project=todo-react-flux
projectCompose=todo-react-flux
makefiles_path=.zol/zol-common/makefile
optional_containers=

# ================================================================================
# COMMON VARS - YOU MUST NOT UPDATE
# ================================================================================

ifeq "$(wildcard $(makefiles_path) )" "$(makefiles_path)"
    include $(makefiles_path)/common.mk
    include $(makefiles_path)/docker.mk
    include $(makefiles_path)/hooks.mk
    include $(makefiles_path)/proxy.mk
    include $(makefiles_path)/assets.mk
endif

# ================================================================================
# CUSTOM
# ================================================================================

install-app: remove build start
install: install-app

zol-common:
	@rm -rf .zol
	@mkdir -p .zol
	@cd .zol && git clone --branch v2.3.0 git@bitbucket.org:zol/zol-common.git

up:
	@echo "$(step) Starting $(project) $(step)"
	@$(compose) up -d node

bash:
	@echo "$(step) Bash $(project) $(step)"
	@$(compose) run --rm node bash

restart: stop start

