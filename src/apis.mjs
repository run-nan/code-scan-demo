const allProjectApis = `
/record_login_log
/version
/license/sale_scale
/monitor
/app
/teams
/bind/generate_secret
/bind/mfa_device
/bind/mfa_device_login
/bind/get_user_info
/bind/get_recovery_code
/unbind
/auth/login_types
/auth
/auth/login
/auth/v2/login
/auth/login_mfa
/auth/v2/reset_password
/auth/reset_password
/auth/invite_join_team
/auth/create_pending_org
/auth/complete_pending_org
/auth/create_team
/auth/check_email
/auth/reset_password_by_admin
/auth/reset_password_by_link
/auth/reset_password_by_jira_user
/auth/login_support
/auth/login_captcha
/auth/send_code
/auth/verify_code
/auth/recommended_apps
/auth/users/normal/email
/auth/request_reset_code
/auth/token_info
/auth/add_account_directly
/auth/logout
/auth/app_auth_token
/auth/reset_password_token
/auth/token_status
/auth/request_support
/auth/check_phone_code
/auth/check_email_code
/auth/verify_phone
/auth/verify_sms
/auth/verify_email
/invitation/:invitationCode
/timezone/lists
/users/me
/users/update
/users/verify_password
/users/update_password
/users/update_language
/users/timezone/config
/users/timezone/update
/users/update_account
/users/bind_user_phone
/users/unbind_user_phone
/users/current_team
/users/all_granted_licenses
/users/current_org/all_licenses
/users/verify_email
/users/request_code
/users/request_phone_code
/res/uploadcallback
/res/make_zip_callback
/team/:teamUUID/importer/import/:resource_type
/team/:teamUUID/importer/batch_task/create
/team/:teamUUID/importer/batch_task/update
/team/:teamUUID/importer/batch_task/get_last
/team/:teamUUID/importer/unbound_issue_types
/team/:teamUUID/importer/unbound_fields
/team/:teamUUID/importer/all_users
/team/:teamUUID/members
/team/:teamUUID/info
/team/:teamUUID/update_info
/team/:teamUUID/configs/update
/team/:teamUUID/delete_member
/team/:teamUUID/delete_members
/team/:teamUUID/search
/team/:teamUUID/request_support
/team/:teamUUID/notices
/team/:teamUUID/notices/info
/team/:teamUUID/notice/update
/team/:teamUUID/invalid_fields
/team/:teamUUID/third_issue_type_bind
/team/:teamUUID/third_field_bind
/team/:teamUUID/third_field_bindings
/team/:teamUUID/timezone/config
/team/:teamUUID/timezone/update
/team/:teamUUID/manhour_limit_config
/team/:teamUUID/add_manhour_limit_config
/team/:teamUUID/update_manhour_limit_config
/team/:teamUUID/delete_manhour_limit_config
/team/:teamUUID/users/update/department
/team/:teamUUID/users/update
/team/:teamUUID/users
/team/:teamUUID/users/search
/team/:teamUUID/users/get_member_list
/team/:teamUUID/user/:memberUUID/reset_password_email
/team/:teamUUID/user/:memberUUID/reset_password_link
/team/:teamUUID/user/:memberUUID/check_user_guide
/team/:teamUUID/user/:memberUUID/update_user_guide
/team/:teamUUID/check_user_guide
/team/:teamUUID/update_user_guide
/team/:teamUUID/invitation_action
/user_guide/scenario
/user_guide/by_scenario
/user_guide/batch_get
/user_guide/set
/team/:teamUUID/sprints/all
/team/:teamUUID/jira/import
/team/:teamUUID/jira/user/set_password
/team/:teamUUID/config/update
/team/:teamUUID/config
/team/:teamUUID/pin
/team/:teamUUID/unpin
/team/:teamUUID/manhour_statistic_mode
/team/:teamUUID/stamps
/team/:teamUUID/stamps/data
/team/:teamUUID/permission_rules/add
/team/:teamUUID/permission_rule/:ruleUUID/delete
/team/:teamUUID/member/:userUUID
/team/:teamUUID/invitations
/team/:teamUUID/invite
/team/:teamUUID/invitations/add
/team/:teamUUID/invitations/add_batch
/team/:teamUUID/invitation/revoke/:invitationCode
/team/:teamUUID/invitation/links/disable
/team/:teamUUID/invitation/links/enable
/team/:teamUUID/invitation/links/reset
/team/:teamUUID/invitation/links/last_link
/team/:teamUUID/invitation/links/records
/team/:teamUUID/invitation/mails/records
/auth/invitation/link/invitation_code/:invitationCode/info
/auth/invitation/link/join_team
/auth/invitation/link/verify_email
/team/:teamUUID/project_templates
/team/:teamUUID/projects/my_project
/team/:teamUUID/projects/recent_projects
/team/:teamUUID/projects/all
/team/:teamUUID/projects/info
/team/:teamUUID/recent_browses
/team/:teamUUID/task_stats
/team/:teamUUID/plugins
/team/:teamUUID/plugin/:pluginUUID/update
/team/:teamUUID/projects/update
/team/:teamUUID/projects/add
/team/:teamUUID/projects/card_report_data
/team/:teamUUID/projects/card_report_data
/team/:teamUUID/plugin_enable_copy_component
/team/:teamUUID/projects/copy
/team/:teamUUID/projects/copy2
/team/:teamUUID/projects/fields
/team/:teamUUID/projects/fields/:fieldUUID/options
/team/:teamUUID/do_setting/task_field/batch_apply
/team/:teamUUID/field_group/on_change
/team/:teamUUID/project_field/batch_apply
/team/:teamUUID/project_status/batch_apply
/team/:teamUUID/project_role/batch_apply
/team/:teamUUID/update_owner/first_verify
/team/:teamUUID/update_owner/second_verify
/team/:teamUUID/update_owner
/team/:teamUUID/update_owner/verify_email
/team/:teamUUID/update_owner/verify_sms
/reset_password/:resetPasswordCode
/team/:teamUUID/project/:projectUUID/stamps/data
/team/:teamUUID/project/:projectUUID/messages
/team/:teamUUID/project/:projectUUID/send_message
/team/:teamUUID/project/:projectUUID/attachments
/team/:teamUUID/project/:projectUUID/delete
/team/:teamUUID/project/:projectUUID/pin
/team/:teamUUID/project/:projectUUID/unpin
/team/:teamUUID/project/:projectUUID/plugins
/team/:teamUUID/project/:projectUUID/plugins/update
/team/:teamUUID/project/:projectUUID/plugin/config
/team/:teamUUID/project/:projectUUID/plugin/config/update
/team/:teamUUID/project/:projectUUID/copy
/team/:teamUUID/project/:projectUUID/recordable_manhour
/team/:teamUUID/project/:projectUUID/filters/add
/team/:teamUUID/project/:projectUUID/filter/:filterUUID/update
/team/:teamUUID/project/:projectUUID/filter/:filterUUID/delete
/team/:teamUUID/project/:projectUUID/filters
/team/:teamUUID/project/:projectUUID/filter/:filterUUID/apply
/team/:teamUUID/project_reports
/team/:teamUUID/project/:projectUUID/built_in_reports
/team/:teamUUID/project/:projectUUID/reports/peek
/team/:teamUUID/project/:projectUUID/report/:reportUUID/build
/team/:teamUUID/project/:projectUUID/reports/export
/team/:teamUUID/project/:projectUUID/reports/add
/team/:teamUUID/project/:projectUUID/report/:reportUUID/update
/team/:teamUUID/project/:projectUUID/report/:reportUUID/delete
/team/:teamUUID/project/:projectUUID/reports/manhour_detail/export
/team/:teamUUID/project/:projectUUID/reports/manhour_detail/peek
/team/:teamUUID/project/:projectUUID/reports/stay_option_detail/peek
/team/:teamUUID/project/:projectUUID/reports/stay_option_detail/export
/team/:teamUUID/project/:projectUUID/reports/manhour_log/peek
/team/:teamUUID/project/:projectUUID/copy_issue_type_configs
/team/:teamUUID/project/:projectUUID/browse
/team/:teamUUID/project/:projectUUID/add_panel
/team/:teamUUID/project/:projectUUID/update_panel
/team/:teamUUID/project/:projectUUID/delete_panel
/team/:teamUUID/project/:projectUUID/panels
/team/:teamUUID/project/:projectUUID/sprint_fields/add
/team/:teamUUID/project/:projectUUID/sprint_field/:fieldUUID/update
/team/:teamUUID/project/:projectUUID/sprint_field/:fieldUUID/delete
/team/:teamUUID/project/:projectUUID/sprint_fields
/team/:teamUUID/project/:projectUUID/sprint_fields/position
/team/:teamUUID/project/:projectUUID/get_sprint_mode
/team/:teamUUID/project/:projectUUID/change_sprint_mode
/team/:teamUUID/project/:projectUUID/sprint_statuses/add
/team/:teamUUID/project/:projectUUID/sprint_status/:statusUUID/update
/team/:teamUUID/project/:projectUUID/sprint_status/:statusUUID/delete
/team/:teamUUID/project/:projectUUID/sprint_statuses
/team/:teamUUID/project/:projectUUID/sprint_assign_list
/team/:teamUUID/project/:projectUUID/activity_chart/:chartUUID/publish
/team/:teamUUID/project/:projectUUID/activity_chart/:chartUUID/search
/team/:teamUUID/project/:projectUUID/activity_chart/:chartUUID/auto_shedule
/team/:teamUUID/project/:projectUUID/activity_chart/:chartUUID/form_download
/team/:teamUUID/project/:projectUUID/activity_chart/:chartUUID/form_upload
/team/:teamUUID/project/:projectUUID/activity_chart/:chartUUID/form_import
/team/:teamUUID/project/:projectUUID/activities/:activityUUID/external_activities
/team/:teamUUID/project/:projectUUID/sprint_pipeline_setting
/team/:teamUUID/project/:projectUUID/sprint_pipeline_setting/update
/team/:teamUUID/project/:projectUUID/field_config
/team/:teamUUID/project/:projectUUID/field_config/add_group
/team/:teamUUID/project/:projectUUID/field_config/delete_group
/team/:teamUUID/project/:projectUUID/field_config/available_field_group
/team/:teamUUID/project/:projectUUID/project_plan/export
/team/:teamUUID/project/:projectUUID/pipeline_binding_rule/preview
/team/:teamUUID/project/:projectUUID/pipeline_binding_rule/check
/team/:teamUUID/tasks/timeline
/team/:teamUUID/tasks/info
/team/:teamUUID/tasks/info
/team/:teamUUID/tasks/evaluated_permissions
/team/:teamUUID/tasks/evaluated_permissions_with_field_constraints
/team/:teamUUID/tasks/add
/team/:teamUUID/tasks/add2
/team/:teamUUID/tasks/add3
/team/:teamUUID/tasks/batch_add
/team/:teamUUID/tasks/update
/team/:teamUUID/tasks/update2
/team/:teamUUID/tasks/update3
/team/:teamUUID/tasks/batch/delete
/team/:teamUUID/tasks/batch/move
/team/:teamUUID/tasks/batch/move/info
/team/:teamUUID/tasks/update_parent
/team/:teamUUID/tasks/update_issuetype
/team/:teamUUID/tasks/copy
/team/:teamUUID/tasks/update_field_values
/team/:teamUUID/project/:projectUUID/tasks/form_upload
/team/:teamUUID/project/:projectUUID/tasks/form_download
/team/:teamUUID/project/:projectUUID/tasks/form_import
/team/:teamUUID/queue/:batchUUID/interrupt
/team/:teamUUID/queue/:batchUUID/extra
/team/:teamUUID/queue/:batchUUID/progress
/team/:teamUUID/queue/:batchUUID/all_status_progress
/team/:teamUUID/queue/:batchUUID/download
/team/:teamUUID/queue/:batchUUID/download/url
/team/:teamUUID/queues/hidden_progress
/team/:teamUUID/queues/list
/team/:teamUUID/queues/list_in_progress
/team/:teamUUID/task/:taskUUID/messages
/team/:teamUUID/task/:taskUUID/v2/messages
/team/:teamUUID/task/:taskUUID/message/:messageUUID
/team/:teamUUID/task/:taskUUID/message/:messageUUID/show_richtext_diff
/team/:teamUUID/task/:taskUUID/send_message
/team/:teamUUID/task/:taskUUID/message/:messageUUID/delete
/team/:teamUUID/task/:taskUUID/message/:messageUUID/update_discussion
/team/:teamUUID/task/:taskUUID/attachments
/team/:teamUUID/task/:taskUUID/info
/team/:teamUUID/task/:taskUUID/batch_related_tasks
/team/:teamUUID/task/:taskUUID/related_tasks
/team/:teamUUID/task/:taskUUID/delete/related_tasks
/team/:teamUUID/task/:taskUUID/delete
/team/:teamUUID/task/:taskUUID/batch_set_publish_version
/team/:teamUUID/task/:taskUUID/commit_publish_version
/team/:teamUUID/task/:taskUUID/manhours/add
/team/:teamUUID/task/:taskUUID/manhour/update
/team/:teamUUID/task/:taskUUID/manhours/list
/team/:teamUUID/task/:taskUUID/assess_manhour/update
/team/:teamUUID/task/:taskUUID/remaining_hour/update
/team/:teamUUID/task/:taskUUID/real_remaining_manhour
/team/:teamUUID/task/:taskUUID/watchers/add
/team/:teamUUID/task/:taskUUID/watchers/delete
/team/:teamUUID/task/:taskUUID/copy
/team/:teamUUID/task/:taskUUID/move
/team/:teamUUID/task/:taskUUID/bind_testcase_plan
/team/:teamUUID/task/:taskUUID/unbind_testcase_plan
/team/:teamUUID/task/:taskUUID/bind_wiki_page
/team/:teamUUID/task/:taskUUID/unbind_wiki_page
/team/:teamUUID/task/:taskUUID/position
/team/:teamUUID/task/:taskUUID/create_demand
/team/:teamUUID/task/:taskUUID/defect_update_status
/team/:teamUUID/task/:taskUUID/merge_defect
/team/:teamUUID/task_link_type/:taskLinkTypeUUID/delete
/team/:teamUUID/res/category_map
/team/:teamUUID/res/attachments
/team/:teamUUID/res/attachments
/team/:teamUUID/res/attachments/upload
/team/:teamUUID/res/attachments/delete
/team/:teamUUID/res/attachment/:attachmentUUID
/team/:teamUUID/res/attachment/update/:attachmentUUID
/team/:teamUUID/res/attachments/batch_download
/team/:teamUUID/res/attachments/download_urls
/team/:teamUUID/res/attachments/upload_config/:type
/team/:teamUUID/res/attachments/record
/team/:teamUUID/third_party/res/attachments/upload
/team/:teamUUID/third_party_message/send
/team/:teamUUID/third_party_message/new_send
/team/:teamUUID/departments
/team/:teamUUID/departments/add
/team/:teamUUID/departments/member_count
/team/:teamUUID/department/update/:departmentUUID
/team/:teamUUID/department/delete/:departmentUUID
/team/:teamUUID/project/:projectUUID/sprints
/team/:teamUUID/project/:projectUUID/sprints/add
/team/:teamUUID/project/:projectUUID/sprints/update
/team/:teamUUID/project/:projectUUID/sprints/export
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/update
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/start
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/end
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/attachments
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/delete
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/burndown
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/component/:componentUUID/burndown
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/code_commit/report
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/code_commit/history
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/sprint_field/:fieldUUID/update
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/sprint_statuses/update
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/update_timeline
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/sprint_timelines
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/man_hours_burndown
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/component/:componentUUID/man_hours_burndown
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/work_hours_report
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/work_hours_export
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/devops_code_commit/report
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/list_binding_pipeline
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/list_binding_commit
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/task_stats/refresh
/team/:teamUUID/manhour/:manhourUUID/delete
/team/:teamUUID/filters
/team/:teamUUID/filters/snapshot
/team/:teamUUID/filters/peek
/team/:teamUUID/filters/graphql
/team/:teamUUID/filters/export
/team/:teamUUID/filters/add_export_task_job
/team/:teamUUID/filters/download_export_task
/team/:teamUUID/filters/add_export_project_job
/team/:teamUUID/filters/download_export_project
/team/:teamUUID/filters/add
/team/:teamUUID/filter/:filterUUID/update
/team/:teamUUID/filter/:filterUUID/delete
/team/:teamUUID/filter/:filterUUID/apply
/team/:teamUUID/usergroups
/team/:teamUUID/usergroups/add
/team/:teamUUID/usergroups/member_count
/team/:teamUUID/usergroup/:usergroupUUID/update
/team/:teamUUID/usergroup/:usergroupUUID/delete
/team/:teamUUID/usergroup/:usergroupUUID/add_user
/team/:teamUUID/usergroup/:usergroupUUID/delete_user
/team/:teamUUID/usergroup/:usergroupUUID/rename
/team/:teamUUID/permission_rules
/team/:teamUUID/context_permission_rules
/team/:teamUUID/lite_context_permission_rules
/team/:teamUUID/context_permission_rules/multi
/team/:teamUUID/evaluated_permissions
/team/:teamUUID/filter_evaluated_permissions
/team/:teamUUID/filter_evaluated_permissions_with_field_constraints
/team/:teamUUID/manhour_report/export
/team/:teamUUID/bff/projects/top
/team/:teamUUID/bff/task/:taskUUID/check_view
/team/:teamUUID/issue_type/:issueTypeUUID/fields/add
/team/:teamUUID/issue_type/:issueTypeUUID/fields/add_group
/team/:teamUUID/issue_type/:issueTypeUUID/field_config/available_field_group
/team/:teamUUID/issue_type/:issueTypeUUID/fields/field_config
/team/:teamUUID/issue_type/:issueTypeUUID/fields/delete_group
/team/:teamUUID/issue_type/:issueTypeUUID/field/:fieldUUID/update
/team/:teamUUID/issue_type/:issueTypeUUID/field/:fieldUUID/delete
/team/:teamUUID/issue_type/:issueTypeUUID/task_statuses/add
/team/:teamUUID/issue_type/:issueTypeUUID/task_status/:taskStatusUUID/update
/team/:teamUUID/issue_type/:issueTypeUUID/task_status/:taskStatusUUID/delete
/team/:teamUUID/issue_type/:issueTypeUUID/task_status_configs/position
/team/:teamUUID/issue_type/:issueTypeUUID/transitions/add
/team/:teamUUID/issue_type/:issueTypeUUID/transitions/position
/team/:teamUUID/issue_type/:issueTypeUUID/transition/:transitionUUID/update
/team/:teamUUID/issue_type/:issueTypeUUID/transition/:transitionUUID/delete
/team/:teamUUID/issue_type/:issueTypeUUID/permission_rules/add
/team/:teamUUID/issue_type/:issueTypeUUID/permission_rule/:ruleUUID/delete
/team/:teamUUID/issue_type/:issueTypeUUID/constraints/add
/team/:teamUUID/issue_type/:issueTypeUUID/constraints/delete
/team/:teamUUID/issue_type/:issueTypeUUID/important_fields/update
/team/:teamUUID/issue_type/:issueTypeUUID/layout
/team/:teamUUID/issue_type/:issueTypeUUID/available_layouts
/team/:teamUUID/issue_type/:issueTypeUUID/layout/update
/team/:teamUUID/issue_type/:issueTypeUUID/layout/copy
/team/:teamUUID/issue_type/:issueTypeUUID/scopes
/team/:teamUUID/issue_types
/team/:teamUUID/issue_types/add
/team/:teamUUID/issue_types/icons
/team/:teamUUID/issue_type/:issueTypeUUID/update
/team/:teamUUID/issue_type/:issueTypeUUID/delete
/team/:teamUUID/issue_type_configs
/team/:teamUUID/project/:projectUUID/issue_types/add
/team/:teamUUID/project/:projectUUID/issue_types/position
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/delete
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/constraints/delete
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/assign_list
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/available_layouts
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/delete
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/assign_list
/team/:teamUUID/fields
/team/:teamUUID/simple_fields
/team/:teamUUID/fields/add
/team/:teamUUID/field/:fieldUUID/update
/team/:teamUUID/field/:fieldUUID/delete
/team/:teamUUID/field/:fieldUUID/field_option/:FieldOptionUUID/task_count
/team/:teamUUID/field_option/used_count
/team/:teamUUID/field/:fieldUUID/update_field_value
/team/:teamUUID/field/:fieldUUID/layout_usage
/team/:teamUUID/field/:fieldUUID/options
/team/:teamUUID/project/:projectUUID/context/rank
/team/:teamUUID/field_configs
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/field_configs
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/fields/add
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/fields/position
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/field/:fieldUUID/update
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/field/:fieldUUID/delete
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/field/:fieldUUID/move
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/important_fields/update
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/layout/update
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/layout/copy
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/fields/add
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/fields/position
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/field_configs/batch_update
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/field/:fieldUUID/update
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/field/:fieldUUID/delete
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/important_fields/update
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/layout/update
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/layout/copy
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/local_field_configs
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/local_field_configs2
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/local_field_configs/add_group
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/local_field_configs/delete_group
/team/:teamUUID/task_statuses
/team/:teamUUID/task_statuses_with_usage
/team/:teamUUID/task_statuses/add
/team/:teamUUID/task_status/:taskStatusUUID/update
/team/:teamUUID/task_status/:taskStatusUUID/delete
/team/:teamUUID/task_status_configs
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/task_statuses/add
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/task_status/:taskStatusUUID/update
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/task_status/:taskStatusUUID/delete
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/task_status/:taskStatusUUID/move
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/task_status_configs/position
/team/:teamUUID/issue_type_scopes/task_status_count
/team/:teamUUID/issue_type_scopes/batch_transit
/team/:teamUUID/copy_workflow
/team/:teamUUID/copy_issue_type_permission
/team/:teamUUID/copy_notice_config
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/task_statuses
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/task_statuses/add
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/task_status/:taskStatusUUID/update
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/task_status/:taskStatusUUID/delete
/team/:teamUUID/transitions
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/transitions/add
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/transitions/position
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/transition/:transitionUUID/update
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/transition/:transitionUUID/delete
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/transitions
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/transitions/add
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/transitions/position
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/transition/:transitionUUID/update
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/transition/:transitionUUID/delete
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/transitions
/team/:teamUUID/task/:taskUUID/transitions
/team/:teamUUID/task/:taskUUID/transit
/team/:teamUUID/task/:taskUUID/new_transit
/team/:teamUUID/transition_async_status
/team/:teamUUID/task/:taskUUID/notice_rules
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/notice_rules
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/notice_rules/add
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/update_default_notice_rule
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/delete_default_notice_rule
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/notice_rule/:ruleUUID/update
/team/:teamUUID/project/:projectUUID/issue_type/:issueTypeUUID/notice_rule/:ruleUUID/delete
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/notice_rules
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/notice_rules/add
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/update_default_notice_rule
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/delete_default_notice_rule
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/notice_rule/:ruleUUID/update
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/notice_rule/:ruleUUID/delete
/team/:teamUUID/issue_type_scope/:issueTypeScopeUUID/field_config/available_field_group
/team/:teamUUID/roles
/team/:teamUUID/roles/add
/team/:teamUUID/role/:roleUUID/update
/team/:teamUUID/role/:roleUUID/delete
/team/:teamUUID/role_configs
/team/:teamUUID/project/:projectUUID/roles/add
/team/:teamUUID/project/:projectUUID/role/:roleUUID/delete
/team/:teamUUID/project/:projectUUID/role_members
/team/:teamUUID/project/:projectUUID/role/:roleUUID/members/add
/team/:teamUUID/project/:projectUUID/role/:roleUUID/members/delete
/team/:teamUUID/project/:projectUUID/role/:roleUUID/members/update
/team/:teamUUID/dashboards
/team/:teamUUID/dashboards/add
/team/:teamUUID/dashboards/copy
/team/:teamUUID/dashboard/:dashboardUUID/update
/team/:teamUUID/dashboard/:dashboardUUID/delete
/team/:teamUUID/dashboard/:dashboardUUID/configure
/team/:teamUUID/dashboard/:dashboardUUID/cards/add
/team/:teamUUID/dashboard/:dashboardUUID/cards/layout
/team/:teamUUID/dashboard/:dashboardUUID/card/:cardUUID/update
/team/:teamUUID/dashboard/:dashboardUUID/card/:cardUUID/data
/team/:teamUUID/dashboard/:dashboardUUID/card/:cardUUID/data
/team/:teamUUID/cards/layout
/team/:teamUUID/card/:cardUUID/data
/team/:teamUUID/team_reports
/team/:teamUUID/reports/peek
/team/:teamUUID/reports/manhour_log/peek
/team/:teamUUID/reports/add
/team/:teamUUID/report/:reportUUID/build
/team/:teamUUID/report/:reportUUID/update
/team/:teamUUID/report/:reportUUID/delete
/team/:teamUUID/reports/manhour_detail/peek
/team/:teamUUID/built_in_reports
/team/:teamUUID/reports/export
/team/:teamUUID/reports/manhour_detail/export
/file/:type/:hash
/preview/file/:type/:hash/pdf/:previewfilename
/preview/unsupported
/local/file/:type/:hash
/batch_files/:hash
/files/upload
/team/:teamUUID/project/:projectUUID/scm_webhook
/team/:teamUUID/project/:projectUUID/scm_webhook/:secretKey
/team/:teamUUID/scm/configure_help
/team/:teamUUID/scm/update_credential
/team/:teamUUID/scm/webhook
/team/:teamUUID/scm/webhook/:secretKey
/team/:teamUUID/pipeline/:pipelineUUID/callback
/team/:teamUUID/pipeline/:pipelineUUID/callback
/team/:teamUUID/pipeline/:pipelineUUID/hooks/:scm/:hookName
/team/:teamUUID/pipeline/:pipelineUUID/install.py
/team/:teamUUID/pipelines
/team/:teamUUID/pipelines/add
/team/:teamUUID/pipeline/:pipelineUUID/update
/team/:teamUUID/pipeline/:pipelineUUID/delete
/team/:teamUUID/pipeline/:pipelineUUID/configure_help
/team/:teamUUID/pipeline/:pipelineUUID/configure_help
/team/:teamUUID/pipeline/:pipelineUUID/update_credential
/team/:teamUUID/pipeline/:pipelineUUID/last_run
/team/:teamUUID/pipeline/:pipelineUUID/runs
/team/:teamUUID/pipeline/:pipelineUUID/run/:runNumber/report
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/lint_report
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/test_report
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/runs
/team/:teamUUID/project/:projectUUID/sprint/:sprintUUID/environments
/team/:teamUUID/pipeline/:pipelineUUID/run/:runNumber/console_log
/team/:teamUUID/space/:spaceUUID/attachments
/importer/check_version/:version
/importer/file_config
/organization/:organizationUUID/polling
/organization/:organizationUUID/importer/history
/organization/:organizationUUID/importer/check_auth
/organization/:organizationUUID/importer/log/:import_uuid/:count
/organization/:organizationUUID/importer/atlassian_user/get_rules
/organization/:organizationUUID/importer/atlassian_user/insert_rules
/organization/:organizationUUID/exist_users
/organization/:organizationUUID/all_users
/organization/:organizationUUID/info
/organization/:organizationUUID/create_team
/organization/:organizationUUID/team/:teamUUID/update
/organization/:organizationUUID/team/:teamUUID/sync_data
/organization/:organizationUUID/team/:teamUUID/initialize/complete
/organization/:organizationUUID/update
/organization/:organizationUUID/teams
/organization/:organizationUUID/team_departments
/organization/:organizationUUID/team_usergroups
/organization/:organizationUUID/delete_member
/organization/:organizationUUID/disable_members
/organization/:organizationUUID/restore_members
/organization/:organizationUUID/members
/organization/:organizationUUID/service
/organization/:organizationUUID/my_teams
/organization/:organizationUUID/add
/organization/:organizationUUID/permission_rules/add
/organization/:organizationUUID/permission_rule/:ruleUUID/delete
/organization/:organizationUUID/permission_rules
/organization/:organizationUUID/stamps/data
/organization/:organizationUUID/stamps/data
/organization/:organizationUUID/sso/sync_data
/organization/:organizationUUID/pay_info
/organization/:organizationUUID/pay_info/channel
/organization/:organizationUUID/grant_management
/organization/:organizationUUID/timezone/config
/organization/:organizationUUID/timezone/update
/organization/:organizationUUID/grant_management/:typeName/info
/organization/:organizationUUID/grant_management/:typeName/user_uuids
/organization/:organizationUUID/grant_management/:typeName/members
/organization/:organizationUUID/grant_management/:typeName/member_count
/organization/:organizationUUID/grant_management/:typeName/export
/organization/:organizationUUID/grant_management/:typeName/add_user
/organization/:organizationUUID/grant_management/:typeName/delete_user
/organization/:organizationUUID/license/grant
/organization/:organizationUUID/license/grant_user
/organization/:organizationUUID/license/setting
/organization/:organizationUUID/licenses
/organization/:organizationUUID/licenses/:typeName/trial
/organization/:organizationUUID/user/:userUUID/info
/organization/:organizationUUID/installed_license_apps
/organization/:organizationUUID/notifiers
/organization/:organizationUUID/notifiers/update
/organization/:organizationUUID/show_user_reminder
/organization/:organizationUUID/no_more_remind
/organization/:organizationUUID/logo/upload
/organization/:organizationUUID/email_template/update
/organization/:organizationUUID/email_template
/organization/:organizationUUID/audit_log/export
/organization/:organizationUUID/audit_log/download
/organization/:organizationUUID/audit_log/actions
/organization/:organizationUUID/audit_log/v2/filter
/organization/:organizationUUID/audit_log/v2/export
/organization/:organizationUUID/audit_log/v2/download
/organization/:organizationUUID/login_notice_status
/organization/:organizationUUID/login_notice_status/update
/organization/:organizationUUID/member_list
/organization/:organizationUUID/auth_config
/organization/:organizationUUID/auth_config
/organization/:organizationUUID/common_config/update
/organization/:organizationUUID/org_config/:configType
/organization/:organizationUUID/org_config/update
/organization/:organizationUUID/email_service_status/data
/organization/:organizationUUID/email_service_status/update
/organization/:organizationUUID/user_list_filter_rules
/organization/:organizationUUID/style/list
/organization/:organizationUUID/style/update
/team/:teamUUID/menu/admin/list
/team/:teamUUID/menu/admin/delete/:menuUUID
/team/:teamUUID/menu/admin/update
/team/:teamUUID/menu/admin/add
/team/:teamUUID/menu/list
/team/:teamUUID/menu/pin/:menuUUID
/team/:teamUUID/menu/unpin/:menuUUID
/team/:teamUUID/menu/pined/position
/organization/:organizationUUID/bff/licenses
/organization/:organizationUUID/update_owner/verify_owner
/organization/:organizationUUID/update_owner
/organization/:organizationUUID/update_owner/send_verify_email
/organization/:organizationUUID/update_owner/send_verify_sms
/organization/:organizationUUID/thirdparty/user/bind
/organization/:organizationUUID/thirdparty/user/unbind
/organization/:organizationUUID/thirdparty/user/info
/organization/:organizationUUID/thirdparty/user/bindings
/organization/:organizationUUID/thirdparty/supported/list
/organization/:organizationUUID/thirdparty/list
/organization/:organizationUUID/thirdparty/base/add_or_update
/organization/:organizationUUID/thirdparty/detail
/organization/:organizationUUID/thirdparty/sync/update
/organization/:organizationUUID/thirdparty/login/update
/organization/:organizationUUID/thirdparty/status/update
/organization/:organizationUUID/thirdparty/mapping/list
/organization/:organizationUUID/thirdparty/remove
/organization/:organizationUUID/thirdparty/pull
/organization/:organizationUUID/thirdparty/sync_source_properties
/organization/:organizationUUID/thirdparty/before_upgrade_data
/organization/:organizationUUID/thirdparty/clear_cache
/sso/login_url
/sso/login
/sso/login_mfa
/sso/bind_email_and_login
/sso/verify_email
/sso/avatar
/sso/plugin/displays
/dingding
/organization/:organizationUUID/dingding
/wechat/callback_ip
/organization/:organizationUUID/wechat
/organization/:organizationUUID/wechat_oauth2_callback
/wechat/oauth2_qr/new
/wechat/oauth2_qr/qrcode
/wechat/oauth2_qr/result
/organization/:organizationUUID/wechat
/wechat/store_app/callback
/wechat/store_app/callback
/organization/:organizationUUID/wechat/store_app/install_qrcode
/organization/:organizationUUID/wechat/store_app/check_bind_org
/wechat/store_app/bind_org
/organization/:organizationUUID/wechat/store_app/ensure_bind_org
/larks/event_callback
/larks/oauth2
/organization/:organizationUUID/lark/test
/larks/bind_org
/organization/:organizationUUID/lark/ensure_bind_org
/ldap/exchange_token
/ldap/login
/ldap/v2/login
/ldap/status
/saml/acs
/saml/metadata
/organization/:organizationUUID/saml/metadata
/google/login
/auth/oauth2/:app/organization/create
/auth/oauth2/:app/login
/organization/:organizationUUID/sms_config
/organization/:organizationUUID/sms_config/update
/miniapp/:miniAppId/login
/miniapp/:miniAppId/message_template
/miniapp/:miniAppId/forms
/miniapp/:miniAppId/form/:formUUID/setting
/miniapp/:miniAppId/workorders/add
/miniapp/:miniAppId/workorders
/miniapp/:miniAppId/workorder/:taskUUID
/miniapp/:miniAppId/workorder/:taskUUID/send_message
/miniapp/:miniAppId/workorder/:taskUUID/upload
/miniapp/:miniAppId/workorder/:taskUUID/watch
/miniapp/:miniAppId/workorder/:taskUUID/unwatch
/team/:teamUUID/testcase/libraries/add
/team/:teamUUID/testcase/libraries
/team/:teamUUID/testcase/bind_case
/team/:teamUUID/testcase/unbind_case
/team/:teamUUID/testcase/search
/team/:teamUUID/testcase/plans/add
/team/:teamUUID/testcase/plans
/team/:teamUUID/testcase/plan_report_tpls/add
/team/:teamUUID/testcase/plan_report_tpls
/team/:teamUUID/testcase/field_config/copy
/team/:teamUUID/testcase/case/:caseUUID/attachments
/team/:teamUUID/testcase/library/:libraryUUID/update
/team/:teamUUID/testcase/library/:libraryUUID/delete
/team/:teamUUID/testcase/library/:libraryUUID/cases/add
/team/:teamUUID/testcase/library/:libraryUUID/cases/update
/team/:teamUUID/testcase/library/:libraryUUID/cases/delete
/team/:teamUUID/testcase/library/:libraryUUID/cases
/team/:teamUUID/testcase/library/:libraryUUID/case/:caseUUID
/team/:teamUUID/testcase/library/:libraryUUID/cases/move
/team/:teamUUID/testcase/library/:libraryUUID/cases/copy
/team/:teamUUID/testcase/library/:libraryUUID/case_recycles/recover
/team/:teamUUID/testcase/library/:libraryUUID/case_recycles/delete
/team/:teamUUID/testcase/library/:libraryUUID/case_recycles/delete_all
/team/:teamUUID/testcase/library/:libraryUUID/modules/add
/team/:teamUUID/testcase/library/:libraryUUID/modules/delete
/team/:teamUUID/testcase/library/:libraryUUID/modules/update
/team/:teamUUID/testcase/library/:libraryUUID/modules/sort
/team/:teamUUID/testcase/library/:libraryUUID/modules/peek
/team/:teamUUID/testcase/library/:libraryUUID/import
/team/:teamUUID/testcase/library/:libraryUUID/import_with_opml
/team/:teamUUID/testcase/library/:libraryUUID/upload
/team/:teamUUID/testcase/library/:libraryUUID/export
/team/:teamUUID/testcase/library/:libraryUUID/pin
/team/:teamUUID/testcase/library/:libraryUUID/unpin
/team/:teamUUID/testcase/library/:libraryUUID/download_template
/team/:teamUUID/testcase/plan/:planUUID/update
/team/:teamUUID/testcase/plan/:planUUID/delete
/team/:teamUUID/testcase/plan/:planUUID/cases/add
/team/:teamUUID/testcase/plan/:planUUID/cases/update
/team/:teamUUID/testcase/plan/:planUUID/cases/delete
/team/:teamUUID/testcase/plan/:planUUID/cases/copy
/team/:teamUUID/testcase/plan/:planUUID/cases
/team/:teamUUID/testcase/plan/:planUUID/case/:caseUUID
/team/:teamUUID/testcase/plan/:planUUID/executors
/team/:teamUUID/testcase/plan/:planUUID/update_status
/team/:teamUUID/testcase/plan/:planUUID/export
/team/:teamUUID/testcase/plan/:planUUID/issue_tracing_config/update
/team/:teamUUID/testcase/plan/:planUUID/bind_task
/team/:teamUUID/plancase/case/:inCaseUUID/resource
/team/:teamUUID/plancase/case/:inCaseUUID/case_attachments
/team/:teamUUID/testcase/report/:reportUUID/view_report
/team/:teamUUID/testcase/report/:reportUUID/update_report
/team/:teamUUID/testcase/report/:reportUUID/export_report
/team/:teamUUID/testcase/report/:reportUUID/download
/team/:teamUUID/testcase_report/components
/team/:teamUUID/testcase/plan_report_tpl/:tplUUID/update
/team/:teamUUID/testcase/plan_report_tpl/:tplUUID/delete
/team/:teamUUID/testcase/plan_report_tpl/:tplUUID
/team/:teamUUID/related_project/:projectUUID/config/update
/team/:teamUUID/related_project/:projectUUID/default_members/add
/team/:teamUUID/related_project/:projectUUID/default_members/delete
/team/:teamUUID/versions/add
/team/:teamUUID/versions
/team/:teamUUID/version/:versionUUID/update
/team/:teamUUID/version/:versionUUID/delete
/team/:teamUUID/version/:versionUUID/sprints/add
/team/:teamUUID/version/:versionUUID/sprint/:sprintUUID/delete
/team/:teamUUID/versions/byproduct/:productUUID
/team/:teamUUID/version/:versionUUID/products/add
/team/:teamUUID/version/:versionUUID/product/:productUUID/delete
/team/:teamUUID/container/:containerType/:containerUUID/copy_issue_type_configs
/team/:teamUUID/container/:containerType/:containerUUID/issue_types/add
/team/:teamUUID/container/:containerType/:containerUUID/issue_types/position
/team/:teamUUID/container/:containerType/:containerUUID/roles/add
/team/:teamUUID/container/:containerType/:containerUUID/role/:roleUUID/delete
`;

export const apisList = allProjectApis
  .split("\n")
  .filter((s) => !!s)
  .map((s) => `/api/project${s}`.trim());

export const apisStr = apisList.join("\n");
