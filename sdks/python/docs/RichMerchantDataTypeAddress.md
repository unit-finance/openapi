# RichMerchantDataTypeAddress

Address of the merchant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**street** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**country** | **str** |  | [optional] 

## Example

```python
from unit_finance_sdk.models.rich_merchant_data_type_address import RichMerchantDataTypeAddress

# TODO update the JSON string below
json = "{}"
# create an instance of RichMerchantDataTypeAddress from a JSON string
rich_merchant_data_type_address_instance = RichMerchantDataTypeAddress.from_json(json)
# print the JSON string representation of the object
print(RichMerchantDataTypeAddress.to_json())

# convert the object into a dict
rich_merchant_data_type_address_dict = rich_merchant_data_type_address_instance.to_dict()
# create an instance of RichMerchantDataTypeAddress from a dict
rich_merchant_data_type_address_from_dict = RichMerchantDataTypeAddress.from_dict(rich_merchant_data_type_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


