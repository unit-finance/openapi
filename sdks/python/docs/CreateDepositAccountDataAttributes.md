# CreateDepositAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deposit_product** | **str** | The name of the deposit product. | 
**tags** | **Dict[str, object]** | Optional. See Tags. | [optional] 
**idempotency_key** | **str** | Optional. See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_deposit_account_data_attributes import CreateDepositAccountDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDepositAccountDataAttributes from a JSON string
create_deposit_account_data_attributes_instance = CreateDepositAccountDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateDepositAccountDataAttributes.to_json())

# convert the object into a dict
create_deposit_account_data_attributes_dict = create_deposit_account_data_attributes_instance.to_dict()
# create an instance of CreateDepositAccountDataAttributes from a dict
create_deposit_account_data_attributes_from_dict = CreateDepositAccountDataAttributes.from_dict(create_deposit_account_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


