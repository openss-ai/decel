import { DefaultAzureCredential } from "@azure/identity";
import { ContainerInstanceManagementClient } from "@azure/arm-containerinstance";
import { ContainerGroup } from "@azure/arm-containerinstance/esm/models";

const subscriptionId = "YOUR_AZURE_SUBSCRIPTION_ID";
const resourceGroupName = "YOUR_RESOURCE_GROUP_NAME";
const containerGroupName = "YOUR_CONTAINER_GROUP_NAME";
const location = "YOUR_AZURE_REGION"; // e.g., "eastus"
const imageName = "ollama/ollama:latest"; // Your Docker image tag
const containerPort = 80; // Port your container listens on
const publicPort = 11434; // Port to expose publicly

async function deployDockerImage() {
  // Authenticate using the default Azure credential
  const credential = new DefaultAzureCredential();
  const client = new ContainerInstanceManagementClient(
    credential,
    subscriptionId,
  );

  // Define the container group
  const containerGroup: ContainerGroup = {
    location: location,
    containers: [
      {
        name: containerGroupName,
        image: imageName,
        resources: {
          requests: {
            cpu: 1,
            memoryInGB: 1.5,
          },
        },
        ports: [
          {
            port: containerPort,
          },
        ],
      },
    ],
    osType: "Linux",
    ipAddress: {
      type: "Public",
      ports: [
        {
          protocol: "TCP",
          port: publicPort,
        },
      ],
    },
  };

  // Create the container group
  console.log("Deploying container...");
  const result = await client.containerGroups.beginCreateOrUpdateAndWait(
    resourceGroupName,
    containerGroupName,
    containerGroup,
  );
  console.log("Container deployed!");

  // Get the public IP address
  const publicIpAddress = result.ipAddress?.ip;
  if (publicIpAddress) {
    console.log(
      `Container is running at http://${publicIpAddress}:${publicPort}`,
    );
  } else {
    console.log("Failed to get the public IP address.");
  }
}

deployDockerImage().catch((err) => {
  console.error("Error deploying container:", err);
});
