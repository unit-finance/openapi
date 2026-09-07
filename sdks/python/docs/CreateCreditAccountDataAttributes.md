# CreateCreditAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_terms** | **str** | The credit terms that will be associated with the account. | 
**credit_limit** | **int** | The credit limit of the account (in cents). | 
**tags** | **Dict[str, object]** | Optional. See Tags. | [optional] 
**idempotency_key** | **str** | Optional. See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_credit_account_data_attributes import CreateCreditAccountDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCreditAccountDataAttributes from a JSON string
create_credit_account_data_attributes_instance = CreateCreditAccountDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateCreditAccountDataAttributes.to_json())

# convert the object into a dict
create_credit_account_data_attributes_dict = create_credit_account_data_attributes_instance.to_dict()
# create an instance of CreateCreditAccountDataAttributes from a dict
create_credit_account_data_attributes_from_dict = CreateCreditAccountDataAttributes.from_dict(create_credit_account_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


