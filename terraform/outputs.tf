output "resource_group" {
  value = azurerm_resource_group.cloudflow.name
}

output "acr_login_server" {
  value = azurerm_container_registry.cloudflow.login_server
}

output "aks_cluster_name" {
  value = azurerm_kubernetes_cluster.cloudflow.name
}

output "vnet_name" {
  value = azurerm_virtual_network.cloudflow.name
}