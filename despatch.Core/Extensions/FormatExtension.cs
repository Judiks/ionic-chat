namespace despatch.Core.Extensions
{
    public static class FormatExtension
    {
        public static string PhoneNumberFormat(this string phoneNumber)
        {
            if (phoneNumber.Length < 10)
            {
                return phoneNumber;
            }
            phoneNumber = phoneNumber.Replace(" ", "");
            if (phoneNumber[0] is '0')
            {
                phoneNumber = $"+38{phoneNumber}";
            }
            if (!(phoneNumber[0] is '+'))
            {
                phoneNumber = $"+{phoneNumber}";
            }
            return phoneNumber;
        }
    }
}
