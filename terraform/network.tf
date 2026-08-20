resource "azurerm_virtual_network" "cloudflow" {
  name                = "cloudflow-vnet"
  location            = azurerm_resource_group.cloudflow.location
  resource_group_name = azurerm_resource_group.cloudflow.name

  address_space = ["10.0.0.0/16"]
}

resource "azurerm_subnet" "aks" {
  name                 = "aks-subnet"
  resource_group_name  = azurerm_resource_group.cloudflow.name
  virtual_network_name = azurerm_virtual_network.cloudflow.name

  address_prefixes = ["10.0.1.0/24"]
}