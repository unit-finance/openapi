# CreateBulkPaymentRequestDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateAWirePaymentDataAttributes**](CreateAWirePaymentDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_bulk_payment_request_data_inner import CreateBulkPaymentRequestDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBulkPaymentRequestDataInner from a JSON string
create_bulk_payment_request_data_inner_instance = CreateBulkPaymentRequestDataInner.from_json(json)
# print the JSON string representation of the object
print(CreateBulkPaymentRequestDataInner.to_json())

# convert the object into a dict
create_bulk_payment_request_data_inner_dict = create_bulk_payment_request_data_inner_instance.to_dict()
# create an instance of CreateBulkPaymentRequestDataInner from a dict
create_bulk_payment_request_data_inner_from_dict = CreateBulkPaymentRequestDataInner.from_dict(create_bulk_payment_request_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


