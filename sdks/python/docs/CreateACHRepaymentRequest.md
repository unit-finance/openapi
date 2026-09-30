# CreateACHRepaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateACHRepaymentData**](CreateACHRepaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_ach_repayment_request import CreateACHRepaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateACHRepaymentRequest from a JSON string
create_ach_repayment_request_instance = CreateACHRepaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateACHRepaymentRequest.to_json())

# convert the object into a dict
create_ach_repayment_request_dict = create_ach_repayment_request_instance.to_dict()
# create an instance of CreateACHRepaymentRequest from a dict
create_ach_repayment_request_from_dict = CreateACHRepaymentRequest.from_dict(create_ach_repayment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


