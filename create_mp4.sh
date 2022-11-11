
function create_mock_mp4() {
ffmpeg -f lavfi -i color=c=red@0.2:duration=10:s=qcif:r=10 SDCard/DCIM/100MEDIA/VID00001.MP4
ffmpeg -f lavfi -i color=c=yellow@0.2:duration=50:s=qcif:r=10 SDCard/DCIM/100MEDIA/VID00002.MP4
ffmpeg -f lavfi -i color=c=green@0.2:duration=100:s=qcif:r=10 SDCard/DCIM/100MEDIA/VID00003.MP4
ffmpeg -f lavfi -i color=c=pink@0.2:duration=500:s=qcif:r=10 SDCard/DCIM/100MEDIA/VID00004.MP4
ffmpeg -f lavfi -i color=c=purple@0.2:duration=1000:s=qcif:r=10 SDCard/DCIM/100MEDIA/VID00005.MP4
ffmpeg -f lavfi -i color=c=blue@0.2:duration=5000:s=qcif:r=10 SDCard/DCIM/100MEDIA/VID00006.MP4
}

create_mock_mp4