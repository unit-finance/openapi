# CreateExternalRepaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateExternalRepaymentData**](CreateExternalRepaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_external_repayment_request import CreateExternalRepaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateExternalRepaymentRequest from a JSON string
create_external_repayment_request_instance = CreateExternalRepaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateExternalRepaymentRequest.to_json())

# convert the object into a dict
create_external_repayment_request_dict = create_external_repayment_request_instance.to_dict()
# create an instance of CreateExternalRepaymentRequest from a dict
create_external_repayment_request_from_dict = CreateExternalRepaymentRequest.from_dict(create_external_repayment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


