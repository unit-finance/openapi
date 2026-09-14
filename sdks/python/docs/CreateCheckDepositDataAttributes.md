# CreateCheckDepositDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The check amount (in cents) to deposit. | 
**description** | **str** | Description of the check deposit (maximum of 50 characters). | 
**clearing_days_override** | **float** | See Dynamic Clearing Period. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**idempotency_key** | **str** | Optional, but **strongly recommended**. See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_check_deposit_data_attributes import CreateCheckDepositDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCheckDepositDataAttributes from a JSON string
create_check_deposit_data_attributes_instance = CreateCheckDepositDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateCheckDepositDataAttributes.to_json())

# convert the object into a dict
create_check_deposit_data_attributes_dict = create_check_deposit_data_attributes_instance.to_dict()
# create an instance of CreateCheckDepositDataAttributes from a dict
create_check_deposit_data_attributes_from_dict = CreateCheckDepositDataAttributes.from_dict(create_check_deposit_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


