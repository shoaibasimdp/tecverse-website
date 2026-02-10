import { useState, FormEvent, ChangeEvent } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        country: '',
        state: '',
        inquiryType: '',
        productInterest: '',
        message: '',
        consent: false
    });

    interface FormErrors {
        firstName?: string;
        lastName?: string;
        email?: string;
        country?: string;
        inquiryType?: string;
        message?: string;
        consent?: string;
        [key: string]: string | undefined;
    }

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const inquiryTypes = [
        { value: '', label: 'Please select an inquiry type' },
        { value: 'sales', label: 'Sales Inquiry' },
        { value: 'support', label: 'Technical Support' },
        { value: 'partnership', label: 'Partnership Opportunity' },
        { value: 'careers', label: 'Careers' },
        { value: 'other', label: 'Other' }
    ];

    const countries = [
        { value: '', label: 'Select Country/Region' },
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'de', label: 'Germany' },
        { value: 'fr', label: 'France' },
        { value: 'jp', label: 'Japan' },
        { value: 'cn', label: 'China' },
        { value: 'in', label: 'India' },
        { value: 'au', label: 'Australia' },
        { value: 'br', label: 'Brazil' },
        { value: 'sg', label: 'Singapore' }
    ];

    const products = [
        { value: '', label: 'Select a product/service' },
        { value: 'cloud', label: 'Cloud Services' },
        { value: 'infrastructure', label: 'Infrastructure Management' },
        { value: 'security', label: 'Security Solutions' },
        { value: 'analytics', label: 'Data & Analytics' },
        { value: 'consulting', label: 'Consulting Services' },
        { value: 'other', label: 'Other' }
    ];

    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.country) newErrors.country = 'Please select a country';
        if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (!formData.consent) newErrors.consent = 'You must agree to the terms';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            setIsSubmitting(false);
            setSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    company: '',
                    jobTitle: '',
                    country: '',
                    state: '',
                    inquiryType: '',
                    productInterest: '',
                    message: '',
                    consent: false
                });
            }, 3000);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type, checked } = target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    if (submitted) {
        return (
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-12 text-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h3 className="text-3xl font-thin-100 text-slate-900 dark:text-white mb-3">Thank You!</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    Your message has been successfully submitted. We'll get back to you within 24-48 hours.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-900 dark:border-slate-800">
            {/* Form Header */}
            <div className="border-b border-slate-200 dark:border-slate-800 px-8 py-6">
                <h2 className="text-3xl font-thin-100 text-slate-900 dark:text-white">Contact Us</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                    Fill out the form below and our team will get back to you as soon as possible.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
                {/* Personal Information Section */}
                <div className="mb-8">
                    <h3 className="text-lg font-thin-100 text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
                        Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${errors.firstName
                                    ? 'border-red-500 dark:border-red-500'
                                    : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white'
                                    }`}
                                placeholder="Enter your first name"
                            />
                            {errors.firstName && (
                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.firstName}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${errors.lastName
                                    ? 'border-red-500 dark:border-red-500'
                                    : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white'
                                    }`}
                                placeholder="Enter your last name"
                            />
                            {errors.lastName && (
                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.lastName}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${errors.email
                                    ? 'border-red-500 dark:border-red-500'
                                    : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white'
                                    }`}
                                placeholder="your.email@example.com"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors"
                                placeholder="+1 (555) 123-4567"
                            />
                        </div>
                    </div>
                </div>

                {/* Company Information Section */}
                <div className="mb-8">
                    <h3 className="text-lg font-thin-100 text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
                        Company Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors"
                                placeholder="Your company name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Job Title
                            </label>
                            <input
                                type="text"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors"
                                placeholder="Your job title"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Country/Region <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${errors.country
                                    ? 'border-red-500 dark:border-red-500'
                                    : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white'
                                    }`}
                            >
                                {countries.map(country => (
                                    <option key={country.value} value={country.value}>
                                        {country.label}
                                    </option>
                                ))}
                            </select>
                            {errors.country && (
                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.country}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                State/Province
                            </label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors"
                                placeholder="State or province"
                            />
                        </div>
                    </div>
                </div>

                {/* Inquiry Details Section */}
                <div className="mb-8">
                    <h3 className="text-lg font-thin-100 text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
                        Inquiry Details
                    </h3>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Inquiry Type <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="inquiryType"
                                value={formData.inquiryType}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${errors.inquiryType
                                    ? 'border-red-500 dark:border-red-500'
                                    : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white'
                                    }`}
                            >
                                {inquiryTypes.map(type => (
                                    <option key={type.value} value={type.value}>
                                        {type.label}
                                    </option>
                                ))}
                            </select>
                            {errors.inquiryType && (
                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.inquiryType}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Product/Service Interest
                            </label>
                            <select
                                name="productInterest"
                                value={formData.productInterest}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors"
                            >
                                {products.map(product => (
                                    <option key={product.value} value={product.value}>
                                        {product.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none ${errors.message
                                    ? 'border-red-500 dark:border-red-500'
                                    : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white'
                                    }`}
                                placeholder="Please provide details about your inquiry..."
                            ></textarea>
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Consent Section */}
                <div className="mb-8">
                    <label className="flex items-start">
                        <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleInputChange}
                            className="mt-0.5 w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-slate-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600"
                        />
                        <span className="ml-3 text-sm text-slate-600 dark:text-slate-400">
                            I agree to the <a href="#" className="text-red-600 dark:text-red-400 hover:underline">Terms of Service</a> and <a href="#" className="text-red-600 dark:text-red-400 hover:underline">Privacy Policy</a>. I understand that my information will be used in accordance with these policies. <span className="text-red-500">*</span>
                        </span>
                    </label>
                    {errors.consent && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400 ml-7">{errors.consent}</p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${isSubmitting
                            ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                            : 'bg-slate-700 text-white hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
                            }`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            'Send'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}