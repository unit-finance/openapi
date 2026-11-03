# UpdateDepositAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, object]** | Optional. See Updating Tags. | [optional] 
**deposit_product** | **str** | Optional. Name of the selected deposit product (you can get the list of available deposit products using a dedicated API endpoint). | [optional] 
**name** | **str** | Optional. Account display name. | [optional] 
**overdraft_limit** | **int** | Optional. Overdraft limit in cents. Must be 0 or greater. | [optional] 

## Example

```python
from unit_finance_sdk.models.update_deposit_account_data_attributes import UpdateDepositAccountDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDepositAccountDataAttributes from a JSON string
update_deposit_account_data_attributes_instance = UpdateDepositAccountDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateDepositAccountDataAttributes.to_json())

# convert the object into a dict
update_deposit_account_data_attributes_dict = update_deposit_account_data_attributes_instance.to_dict()
# create an instance of UpdateDepositAccountDataAttributes from a dict
update_deposit_account_data_attributes_from_dict = UpdateDepositAccountDataAttributes.from_dict(update_deposit_account_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


