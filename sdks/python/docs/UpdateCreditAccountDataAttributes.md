# UpdateCreditAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, object]** | Optional. See Updating Tags. | [optional] 
**credit_limit** | **int** | Optional. The credit limit of the account (in cents). | [optional] 

## Example

```python
from unit_finance_sdk.models.update_credit_account_data_attributes import UpdateCreditAccountDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCreditAccountDataAttributes from a JSON string
update_credit_account_data_attributes_instance = UpdateCreditAccountDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateCreditAccountDataAttributes.to_json())

# convert the object into a dict
update_credit_account_data_attributes_dict = update_credit_account_data_attributes_instance.to_dict()
# create an instance of UpdateCreditAccountDataAttributes from a dict
update_credit_account_data_attributes_from_dict = UpdateCreditAccountDataAttributes.from_dict(update_credit_account_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


