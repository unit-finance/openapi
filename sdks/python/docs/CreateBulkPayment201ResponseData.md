# CreateBulkPayment201ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateBulkPayment201ResponseDataAttributes**](CreateBulkPayment201ResponseDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_bulk_payment201_response_data import CreateBulkPayment201ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBulkPayment201ResponseData from a JSON string
create_bulk_payment201_response_data_instance = CreateBulkPayment201ResponseData.from_json(json)
# print the JSON string representation of the object
print(CreateBulkPayment201ResponseData.to_json())

# convert the object into a dict
create_bulk_payment201_response_data_dict = create_bulk_payment201_response_data_instance.to_dict()
# create an instance of CreateBulkPayment201ResponseData from a dict
create_bulk_payment201_response_data_from_dict = CreateBulkPayment201ResponseData.from_dict(create_bulk_payment201_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


