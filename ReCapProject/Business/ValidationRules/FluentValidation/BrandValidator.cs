using Business.Constants;
using Entities.Concrete;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.ValidationRules.FluentValidation
{
    class BrandValidator : AbstractValidator<Brand>
    {
        public BrandValidator()
        {
            RuleFor(c => c.BrandName).NotEmpty().WithMessage("Brand can not be null");
            RuleFor(c => c.BrandName).MinimumLength(2).WithMessage(Messages.InvalidBrandName);

        }
    }
}
