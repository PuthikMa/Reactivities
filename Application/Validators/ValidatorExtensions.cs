using FluentValidation;

namespace Application.Validators
{
    public static class ValidatorExtensions
    {
        public static IRuleBuilder<T, string> password<T>(this IRuleBuilder<T, string> ruleBuilder){
            var options = ruleBuilder
            .NotEmpty().MinimumLength(6).WithMessage("Password be at least 6 characters")
                .Matches("[A-Z]").WithMessage("Password must contain 1 uppercase letter")
                .Matches("[a-z]").WithMessage("Must must have at least 1 lowercase character")
                .Matches("[a-z]").WithMessage("Must must have at least 1 lowercase character")
                .Matches("[0-9]").WithMessage("Must must contain a number")
                .Matches("[^a-zA-Z0-9]").WithMessage("Must must contain non alphanumeric");
                return options;
        }
    }
}