# CreateCheckDeposit201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CheckDeposit**](CheckDeposit.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_check_deposit201_response import CreateCheckDeposit201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCheckDeposit201Response from a JSON string
create_check_deposit201_response_instance = CreateCheckDeposit201Response.from_json(json)
# print the JSON string representation of the object
print(CreateCheckDeposit201Response.to_json())

# convert the object into a dict
create_check_deposit201_response_dict = create_check_deposit201_response_instance.to_dict()
# create an instance of CreateCheckDeposit201Response from a dict
create_check_deposit201_response_from_dict = CreateCheckDeposit201Response.from_dict(create_check_deposit201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


