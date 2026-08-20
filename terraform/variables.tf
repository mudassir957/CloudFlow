variable "subscription_id" {
  type = string
}

variable "location" {
  default = "Germany West Central"
}

variable "resource_group_name" {
  default = "cloudflow-rg"
}

variable "acr_name" {
  default = "mudassircloudflow123"
}

variable "aks_name" {
  default = "cloudflow-aks"
}