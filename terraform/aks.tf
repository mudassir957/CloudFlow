resource "azurerm_kubernetes_cluster" "cloudflow" {
  name                = var.aks_name
  location            = azurerm_resource_group.cloudflow.location
  resource_group_name = azurerm_resource_group.cloudflow.name

  dns_prefix = "cloudflow"

  default_node_pool {
    name           = "system"
    node_count     = 1
    vm_size        = "Standard_D2s_v7"
    vnet_subnet_id = azurerm_subnet.aks.id
  }

  identity {
    type = "SystemAssigned"
  }

  network_profile {
    network_plugin = "azure"

    service_cidr   = "10.10.0.0/16"
    dns_service_ip = "10.10.0.10"
  }
}

resource "azurerm_role_assignment" "aks_acr" {
  principal_id = azurerm_kubernetes_cluster.cloudflow.kubelet_identity[0].object_id

  role_definition_name = "AcrPull"
  scope                = azurerm_container_registry.cloudflow.id

  skip_service_principal_aad_check = true
}