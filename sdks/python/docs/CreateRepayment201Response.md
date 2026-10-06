# CreateRepayment201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateRepayment201ResponseData**](CreateRepayment201ResponseData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_repayment201_response import CreateRepayment201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRepayment201Response from a JSON string
create_repayment201_response_instance = CreateRepayment201Response.from_json(json)
# print the JSON string representation of the object
print(CreateRepayment201Response.to_json())

# convert the object into a dict
create_repayment201_response_dict = create_repayment201_response_instance.to_dict()
# create an instance of CreateRepayment201Response from a dict
create_repayment201_response_from_dict = CreateRepayment201Response.from_dict(create_repayment201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


