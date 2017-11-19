function SupplyItem(inputName, inputSize, inputExpiry, inputCost )
{
//cost is a float, name is a string, size is a positive large number in m^3 and expiry is a date object, unique is an identifier that is handled by the item list. 

	const float TAX = 0.23;

	name = inputName;

	size = inputSize;

	expire = inputExpiry;

	cost = inputCost;
	taxCost = inputCost * TAX;

function Expired(currentDate)
//currentDate is a date object, need to fill in what parameters we are working with
//if the item we are dealing with is expired, we return false to the list
	{	
		return (SupplyItem.expire.getFullYear() >= currentDate.getFullYear() && SupplyItem.expire.getMonth() >= currentDate.getMonth() && SupplyItem.expire.getDate() >= currentDate.getDate());
	}
}