resource "azurerm_container_registry" "cloudflow" {
  name                = var.acr_name
  resource_group_name = azurerm_resource_group.cloudflow.name
  location            = azurerm_resource_group.cloudflow.location

  sku           = "Basic"
  admin_enabled = true
}