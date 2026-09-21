# CreatePolicy201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CardFraudOutreachPolicy**](CardFraudOutreachPolicy.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_policy201_response import CreatePolicy201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePolicy201Response from a JSON string
create_policy201_response_instance = CreatePolicy201Response.from_json(json)
# print the JSON string representation of the object
print(CreatePolicy201Response.to_json())

# convert the object into a dict
create_policy201_response_dict = create_policy201_response_instance.to_dict()
# create an instance of CreatePolicy201Response from a dict
create_policy201_response_from_dict = CreatePolicy201Response.from_dict(create_policy201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


