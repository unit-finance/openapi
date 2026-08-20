# CreateAccountHoldRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateAccountHoldData**](CreateAccountHoldData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_account_hold_request import CreateAccountHoldRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAccountHoldRequest from a JSON string
create_account_hold_request_instance = CreateAccountHoldRequest.from_json(json)
# print the JSON string representation of the object
print(CreateAccountHoldRequest.to_json())

# convert the object into a dict
create_account_hold_request_dict = create_account_hold_request_instance.to_dict()
# create an instance of CreateAccountHoldRequest from a dict
create_account_hold_request_from_dict = CreateAccountHoldRequest.from_dict(create_account_hold_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


