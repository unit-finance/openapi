# RichMerchantDataType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the merchant. | 
**website** | **str** | URL of the merchant&#39;s website. | [optional] 
**logo** | **str** | URL of the merchant&#39;s logo. | [optional] 
**phone** | **str** | Phone number of the merchant. | [optional] 
**categories** | [**List[RichMerchantDataTypeCategoriesInner]**](RichMerchantDataTypeCategoriesInner.md) | Array of categories the merchant belongs to (from the least specific to the most specific). | [optional] 
**address** | [**RichMerchantDataTypeAddress**](RichMerchantDataTypeAddress.md) |  | [optional] 
**coordinates** | [**CoordinatesType**](CoordinatesType.md) | Coordinates (latitude, longitude) of the merchant. | [optional] 
**facilitators** | **List[Dict[str, object]]** | The transaction facilitators. | [optional] 

## Example

```python
from unit_finance_sdk.models.rich_merchant_data_type import RichMerchantDataType

# TODO update the JSON string below
json = "{}"
# create an instance of RichMerchantDataType from a JSON string
rich_merchant_data_type_instance = RichMerchantDataType.from_json(json)
# print the JSON string representation of the object
print(RichMerchantDataType.to_json())

# convert the object into a dict
rich_merchant_data_type_dict = rich_merchant_data_type_instance.to_dict()
# create an instance of RichMerchantDataType from a dict
rich_merchant_data_type_from_dict = RichMerchantDataType.from_dict(rich_merchant_data_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


