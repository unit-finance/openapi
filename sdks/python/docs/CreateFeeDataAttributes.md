# CreateFeeDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The amount (in cents) to charge the account. | 
**description** | **str** | Description of the fee (maximum of 50 characters). | 
**tags** | **Dict[str, object]** | Optional. See Tags. | [optional] 
**idempotency_key** | **str** | Optional, but **strongly recommended**. See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_fee_data_attributes import CreateFeeDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFeeDataAttributes from a JSON string
create_fee_data_attributes_instance = CreateFeeDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateFeeDataAttributes.to_json())

# convert the object into a dict
create_fee_data_attributes_dict = create_fee_data_attributes_instance.to_dict()
# create an instance of CreateFeeDataAttributes from a dict
create_fee_data_attributes_from_dict = CreateFeeDataAttributes.from_dict(create_fee_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


