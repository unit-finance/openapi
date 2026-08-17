# CreateAccount201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListAccounts200ResponseDataInner**](ListAccounts200ResponseDataInner.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_account201_response import CreateAccount201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAccount201Response from a JSON string
create_account201_response_instance = CreateAccount201Response.from_json(json)
# print the JSON string representation of the object
print(CreateAccount201Response.to_json())

# convert the object into a dict
create_account201_response_dict = create_account201_response_instance.to_dict()
# create an instance of CreateAccount201Response from a dict
create_account201_response_from_dict = CreateAccount201Response.from_dict(create_account201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


