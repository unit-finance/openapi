# CreateBatchReleasesDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The amount (in cents) to move from the batch account to the receiver account. | 
**description** | **str** | Description of the payment (maximum of 50 characters). | 
**sender_name** | **str** | Sender name for the payment (maximum of 255 characters). | 
**sender_address** | [**AddressType**](AddressType.md) | Sender address for the payment. | 
**sender_account_number** | **str** | A unique identifier for the sender of the payment (maximum of 17 characters). As an example, when the payment comes from a card processor, this identifier may be set to the BIN followed by the last four digits of the card used. | 
**tags** | **Dict[str, object]** | Optional. See Tags. Tags will be passed to the related Release Transaction. | [optional] 
**idempotency_key** | **str** | Optional, but strongly recommended. See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_batch_releases_data_attributes import CreateBatchReleasesDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBatchReleasesDataAttributes from a JSON string
create_batch_releases_data_attributes_instance = CreateBatchReleasesDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateBatchReleasesDataAttributes.to_json())

# convert the object into a dict
create_batch_releases_data_attributes_dict = create_batch_releases_data_attributes_instance.to_dict()
# create an instance of CreateBatchReleasesDataAttributes from a dict
create_batch_releases_data_attributes_from_dict = CreateBatchReleasesDataAttributes.from_dict(create_batch_releases_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


