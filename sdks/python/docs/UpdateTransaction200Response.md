# UpdateTransaction200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Transaction**](Transaction.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_transaction200_response import UpdateTransaction200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTransaction200Response from a JSON string
update_transaction200_response_instance = UpdateTransaction200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateTransaction200Response.to_json())

# convert the object into a dict
update_transaction200_response_dict = update_transaction200_response_instance.to_dict()
# create an instance of UpdateTransaction200Response from a dict
update_transaction200_response_from_dict = UpdateTransaction200Response.from_dict(update_transaction200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


