# CreateFee201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Fee**](Fee.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_fee201_response import CreateFee201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFee201Response from a JSON string
create_fee201_response_instance = CreateFee201Response.from_json(json)
# print the JSON string representation of the object
print(CreateFee201Response.to_json())

# convert the object into a dict
create_fee201_response_dict = create_fee201_response_instance.to_dict()
# create an instance of CreateFee201Response from a dict
create_fee201_response_from_dict = CreateFee201Response.from_dict(create_fee201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


