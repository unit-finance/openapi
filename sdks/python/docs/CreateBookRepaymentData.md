# CreateBookRepaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateBookRepaymentDataAttributes**](CreateBookRepaymentDataAttributes.md) |  | 
**relationships** | [**CreateRecurringBookRepaymentDataRelationships**](CreateRecurringBookRepaymentDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_book_repayment_data import CreateBookRepaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBookRepaymentData from a JSON string
create_book_repayment_data_instance = CreateBookRepaymentData.from_json(json)
# print the JSON string representation of the object
print(CreateBookRepaymentData.to_json())

# convert the object into a dict
create_book_repayment_data_dict = create_book_repayment_data_instance.to_dict()
# create an instance of CreateBookRepaymentData from a dict
create_book_repayment_data_from_dict = CreateBookRepaymentData.from_dict(create_book_repayment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


