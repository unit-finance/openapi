# CreateAccountHold201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AccountHold**](AccountHold.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_account_hold201_response import CreateAccountHold201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAccountHold201Response from a JSON string
create_account_hold201_response_instance = CreateAccountHold201Response.from_json(json)
# print the JSON string representation of the object
print(CreateAccountHold201Response.to_json())

# convert the object into a dict
create_account_hold201_response_dict = create_account_hold201_response_instance.to_dict()
# create an instance of CreateAccountHold201Response from a dict
create_account_hold201_response_from_dict = CreateAccountHold201Response.from_dict(create_account_hold201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


