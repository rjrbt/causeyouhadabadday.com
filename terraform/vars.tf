variable "bad_day_site_aws_access_key" {}
variable "bad_day_site_aws_secret_key" {}

variable "site" {
  type = "map"
  default = {
    fqdn = "causeyouhadabadday.com"
    bucket = "causeyouhadabadday.com"
    name = "causeyouhadabadday"
    environment = "prod"
    project = "causeyouhadabadday"
    root_object = "index.html"
  }
}