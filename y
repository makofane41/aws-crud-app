version = 0.1
[default.deploy.parameters]
stack_name = "crud-two"
resolve_s3 = true
s3_prefix = "crud-two"
region = "us-east-1"
confirm_changeset = true
capabilities = "CAPABILITY_IAM"
disable_rollback = true
image_repositories = []
