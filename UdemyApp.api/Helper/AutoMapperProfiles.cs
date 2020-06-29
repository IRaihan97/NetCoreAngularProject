using System.Linq;
using AutoMapper;
using UdemyApp.api.Dtos;
using UdemyApp.api.Models;

namespace UdemyApp.api.Helper
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDTO>()
                .ForMember(dest => dest.PhotoUrl, 
                opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url))
                .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalucalteAge()));
            CreateMap<User, UserForDetailedDTO>()
                .ForMember(dest => dest.PhotoUrl, 
                opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url))
                .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalucalteAge()));
            CreateMap<Photo, PhotosForDetailedDTO>();
        }
    }
}