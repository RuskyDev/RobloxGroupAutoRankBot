-- Customization Section
local rankEndpoint = "https://example.com/rank"
local kickMessage = "You have been ranked."
local part = script.Parent
local RoleId = 80

local function rankUser(UserId, RoleId)
	local requestUrl = string.format("%s?userid=%d&rank=%d", rankEndpoint, UserId, RoleId)
	game:GetService("HttpService"):GetAsync(requestUrl)
end

part.Touched:Connect(function(hit)
	local humanoid = hit.Parent:FindFirstChildOfClass("Humanoid")
	local player = game.Players:GetPlayerFromCharacter(hit.Parent)
	if humanoid and humanoid:IsDescendantOf(workspace) and player then
		local UserId = player.UserId
		rankUser(UserId, RoleId)
		player:Kick(kickMessage)
	end
end)
