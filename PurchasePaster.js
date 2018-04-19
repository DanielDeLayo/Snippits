var classes = ["42921", "45081",  "45857",  "46452",  "43426"];

var boxes = document.getElementsByName("CRN_IN");
for (i = 0; i < classes.length && boxes.length-1; i++) 
{
	boxes[i+1].value = classes[i];
}
